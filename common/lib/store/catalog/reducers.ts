import {Catalog} from "../../models";
import {ReduxAction} from "../events";
import {CatalogEvents} from "./events";


const initialState: Catalog = {
    canFetch: true,
    categoryBaseUrl: '',
    categoryId: 0,
    categoryName: '',
    errorMessage: '',
    isFetching: false,
    page: 0,
    products: [],
    productsApiUrl: '',
    productsQuantity: 0,
    storeId: 0,
    websiteUrl: ''
};

export function catalogReducer(state = initialState, action: ReduxAction): Catalog {
    if (!action) {
        return {...state};
    }

    switch (action.type) {
        case CatalogEvents.RequestPage:
            return {
                ...state,
                isFetching: true
            };
        case CatalogEvents.ReceivePage:
            return {
                ...state,
                isFetching: false,
                page: action.page,
                products: [...state.products, ...action.products],
                productsQuantity: action.productsQuantity
            };
        case CatalogEvents.SetCatalogData:
            return {
                ...state,
                categoryBaseUrl: action.categoryBaseUrl,
                categoryId: action.categoryId,
                categoryName: action.categoryName,
                productsApiUrl: action.productsApiUrl,
                storeId: action.storeId,
                websiteUrl: action.websiteUrl
            };
        default:
            return {...state};
    }
}
