import {Catalog as CatalogModel} from '../../common/lib/';
import {ReduxState, RootState} from '../../common/lib/store';
import {catalogRequestPage, getCatalog, setCatalogData} from '../../common/lib/store/catalog';
import {CatalogDataset} from '../../common/lib/models';
import {Catalog as CatalogComponent} from './catalog';
import {Header as HeaderComponent} from './header';
import {connect, Dispatch} from 'react-redux';

const mapStateToProps = (state: ReduxState): CatalogModel => {
    const catalog = getCatalog(state);
    return {...catalog};
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {
        catalogRequestPage: (page: number) => dispatch(catalogRequestPage(page)),
        setCatalogData: (data: CatalogDataset) => dispatch(setCatalogData(data))
    };
};

export const Catalog = connect(mapStateToProps, mapDispatchToProps)(CatalogComponent);
export const Header = connect(mapStateToProps)(HeaderComponent);