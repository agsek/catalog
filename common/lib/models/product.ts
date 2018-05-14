import {ProductColor} from './color';

export interface ProductPartial {
    id: number;
    super_attr: number;
    qty: number;
}

export interface Product {
    id: number;
    name: string;
    color: Readonly<ProductColor>;
    index: string;
    sku: string;
    brand: string;
    count: number;
    price: string;
    final_price: string;
    unit_price: string;
    size: string;
    min: number;
    max: number;
    url: string;
    img: string;
    discount: string;
    has_discount: boolean;
    rules: string | null;
    is_in_stock: boolean;
}
