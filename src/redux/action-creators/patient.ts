import {Dispatch} from "redux";
import axios from "axios";
import {PatientAction, PatientActionTypes} from "../../types/Patient";

export const fetchPatients = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<PatientAction>) => {
        try {
            dispatch({type: PatientActionTypes.FETCH_PATIENTS})
            // const response = await axios.get('http://localhost:8080/api/v1/patients', {
            // const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
            //     params: {_page: page, _limit: limit}
        // })

            const response = await axios.get('http://localhost:8080/api/v1/patients');   
            // setTimeout(() => {
                dispatch({type: PatientActionTypes.FETCH_PATIENTS_SUCCESS, payload: response.data})
            // }, 500)
        } catch (e) {
            dispatch({
                type: PatientActionTypes.FETCH_PATIENTS_ERROR,
                payload: 'ERROR: Load list of Patients'
            })
        }
    }
}
export function setPatientPage(page: number): PatientAction {
    return {type: PatientActionTypes.SET_PATIENT_PAGE, payload: page}
}