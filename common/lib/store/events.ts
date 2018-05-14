import {ReduxState} from './reducers';
import {ReceivePage, RequestPage, SetCatalogData} from './catalog';

export type ReduxDispatch = (action: ReduxAction) => void;
export type ReduxStoreState = () => ReduxState;
export type ReduxThunk = (dispatch: ReduxDispatch, getState: ReduxStoreState) => Promise<any> | undefined;
export type ReduxAction = ReceivePage
    | RequestPage
    | SetCatalogData;
