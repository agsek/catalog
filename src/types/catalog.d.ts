import {ReduxAction} from '../../common/lib/store/events';
import {Catalog, CatalogDataset} from '../../common/lib/models';

interface Props {
    catalogRequestPage(page: number): ReduxAction;
    setCatalogData(data: CatalogDataset): ReduxAction;
}

export type CatalogProps = Catalog & Props;
