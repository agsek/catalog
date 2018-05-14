import {Catalog} from '../../';
import {RootState} from '../';

export function getCatalog(state: RootState): Catalog {
    return state.catalog;
}
