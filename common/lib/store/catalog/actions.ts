import {Catalog, CatalogDataset, CatalogProduct, ElasticErrorResponse, ElasticProductsResponse} from '../../models';
import {ReduxAction, ReduxDispatch, ReduxStoreState, ReduxThunk} from '../events';
import {CatalogEvents} from './events';
import {getCatalog} from './selectors';
import {fetchData} from '../../support';
import {CatalogProps} from '../../../../src/types/catalog';

function receivePage(page: number, products: CatalogProduct[], productsQuantity: number): ReduxAction {
    return {
        page,
        products,
        productsQuantity,
        type: CatalogEvents.ReceivePage
    };
}

function requestPage(): ReduxAction {
    return {
        type: CatalogEvents.RequestPage
    };
}

function setData(data: CatalogDataset): ReduxAction {
    return {
        categoryBaseUrl: data.categoryBaseUrl,
        categoryId: data.categoryId,
        categoryName: data.categoryName,
        productsApiUrl: data.productsApiUrl,
        storeId: data.storeId,
        type: CatalogEvents.SetCatalogData,
        websiteUrl: data.websiteUrl
    };
}

function shouldSendRequest(page: number, state: Catalog): boolean {
    return !(state.isFetching || page <= state.page);
}

async function asyncGetProducts(page: number, dispatch: ReduxDispatch, catalog: Catalog): Promise<Response> {
    const url = `${catalog.productsApiUrl}${catalog.storeId}/category/${catalog.categoryId}/products`;

    dispatch(requestPage());
    return await fetchData(url, `page=${page}`, 'get', 'omit')
        .then((value: Response) => {
            return value.json();
        })
        .catch((error: any) => {
            throw new Error(error);
        })
        .then((data: ElasticProductsResponse | ElasticErrorResponse): ElasticProductsResponse => {
            if ('error' in data) {
                throw new Error(data.error.message);
            }
            return data;
        })
        .then((data: ElasticProductsResponse) => {
            if (data.products.length) {
                dispatch(receivePage(page, data.products, data.productsTotalAmount));
            }
        });
}

export function catalogRequestPage(page: number): ReduxThunk {
    return (dispatch: ReduxDispatch, getState: ReduxStoreState) => {
        const catalog = getCatalog(getState());
        if (shouldSendRequest(page, catalog)) {
            return asyncGetProducts(page, dispatch, catalog);
        }
    };
}

export function setCatalogData(data: CatalogDataset): ReduxAction {
    return setData(data);
}
