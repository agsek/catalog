import {CatalogDataset, ProductPartial} from '../lib';

export type Props = {
    [key: string]: any;
};

export interface WindowEx extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    getConfig(): Props;
    getTranslations(): Props;
    __REDUX_DEVTOOLS_EXTENSION__(): any;
    domReady(): Promise<void>;
    getCatalogData(): CatalogDataset;
}
