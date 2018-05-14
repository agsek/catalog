import {CatalogDataset} from '../../';

export enum CatalogEvents {
    ReceivePage = 'RECEIVE_PAGE',
    RequestPage = 'REQUEST_PAGE',
    SetCatalogData = 'SET_CATALOG_DATA'
}

export interface RequestPage {
    type: CatalogEvents.RequestPage;
}

export interface ReceivePage {
    page: number;
    products: any[];
    productsQuantity: number;
    type: CatalogEvents.ReceivePage;
}

export interface SetCatalogData extends CatalogDataset {
    type: CatalogEvents.SetCatalogData;
}
