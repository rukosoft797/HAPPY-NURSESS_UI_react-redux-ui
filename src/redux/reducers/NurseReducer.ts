import {NurseAction, NurseActionTypes, NurseState} from "../../types/Nurse";

const initialState: NurseState = {
    nurses: [],
    // page: 1,
    error: null,
    // limit: 10,
    loading: false
}

export const NurseReducer = (state = initialState, action: NurseAction): NurseState => {
    switch (action.type) {
        case NurseActionTypes.FETCH_NURSES:
            return {loading: true, error: null, nurses:[]}
        case NurseActionTypes.FETCH_NURSES_SUCCESS:
            return {...state, loading: false, error: null, nurses: action.payload}
        case NurseActionTypes.FETCH_NURSES_ERROR:
            return {...state, loading: false, error: action.payload}
        // case NurseActionTypes.SET_NURSE_PAGE:
        //     return {...state, page: action.payload}
        default:
            return state
    }
}