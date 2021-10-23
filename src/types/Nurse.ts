export interface NurseState {
    nurses: any[];
    loading: boolean;
    error: null | string;
    // page: number;
    // limit: number;
}

export enum NurseActionTypes {
    FETCH_NURSES= 'FETCH_NURSES',
    FETCH_NURSES_SUCCESS= 'FETCH_NURSES_SUCCESS',
    FETCH_NURSES_ERROR= 'FETCH_NURSES_ERROR',
    SET_NURSE_PAGE = 'SET_NURSE_PAGE'
}
interface FetchNurseAction {
    type: NurseActionTypes.FETCH_NURSES
}
interface FetchNurseSuccessAction {
    type: NurseActionTypes.FETCH_NURSES_SUCCESS;
    payload: any[];
}
interface FetchNurseErrorAction {
    type: NurseActionTypes.FETCH_NURSES_ERROR;
    payload: string;
}
interface SetNursePage {
    type: NurseActionTypes.SET_NURSE_PAGE;
    payload: number;
}

export type NurseAction =
    FetchNurseAction
    | FetchNurseErrorAction
    | FetchNurseSuccessAction
    | SetNursePage