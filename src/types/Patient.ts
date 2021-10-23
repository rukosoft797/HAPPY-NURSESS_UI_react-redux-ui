export interface PatientState {
    patients: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum PatientActionTypes {
    FETCH_PATIENTS= 'FETCH_PATIENTS',
    FETCH_PATIENTS_SUCCESS= 'FETCH_PATIENTS_SUCCESS',
    FETCH_PATIENTS_ERROR= 'FETCH_PATIENTS_ERROR',
    SET_PATIENT_PAGE = 'SET_PATIENT_PAGE'
}
interface FetchPatientAction {
    type: PatientActionTypes.FETCH_PATIENTS
}
interface FetchPatientSuccessAction {
    type: PatientActionTypes.FETCH_PATIENTS_SUCCESS;
    payload: any[];
}
interface FetchPatientErrorAction {
    type: PatientActionTypes.FETCH_PATIENTS_ERROR;
    payload: string;
}
interface SetPatientPage {
    type: PatientActionTypes.SET_PATIENT_PAGE;
    payload: number;
}

export type PatientAction =
    FetchPatientAction
    | FetchPatientErrorAction
    | FetchPatientSuccessAction
    | SetPatientPage