export interface CatalogDataset {
    categoryBaseUrl: string;
    categoryId: number;
    categoryName: string;
    productsApiUrl: string;
    storeId: number;
    websiteUrl: string;
}

export interface Catalog extends CatalogDataset {
    canFetch: boolean;
    errorMessage: string;
    isFetching: boolean;
    page: number;
    products: CatalogProduct[];
    productsQuantity: number;
}

interface Sticker {
    color: string;
    text: string;
}

export interface CatalogProduct {
    finalPrice: number;
    finalPriceAsString: string;
    photo: {
        back: string;
        front: string;
    };
    productId: string;
    regularPrice: number;
    regularPriceAsString: string;
    sku: string;
    sticker: Sticker;
    title: string;
}
