import {CatalogProduct} from './catalog';

export interface ElasticProductsResponse {
    products: CatalogProduct[];
    productsTotalAmount: number;
}

export interface ElasticErrorResponse {
    error: {
        code: number,
        exception: [{
            message: string,
            class: string,
            trace: [{
                namespace: string,
                short_class: string,
                class: string,
                type: string,
                function: string
            }]
        }],
        message: string
    };
}
