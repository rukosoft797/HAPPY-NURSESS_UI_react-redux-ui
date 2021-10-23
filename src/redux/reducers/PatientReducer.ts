import {PatientAction, PatientActionTypes, PatientState} from "../../types/Patient";

const initialState: PatientState = {
    patients: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const PatientReducer = (state = initialState, action: PatientAction): PatientState => {
    switch (action.type) {
        case PatientActionTypes.FETCH_PATIENTS:
            return {...state, loading: true}
        case PatientActionTypes.FETCH_PATIENTS_SUCCESS:
            return {...state, loading: false, patients: action.payload}
        case PatientActionTypes.FETCH_PATIENTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PatientActionTypes.SET_PATIENT_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}