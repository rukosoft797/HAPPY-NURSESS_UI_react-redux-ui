import {Dispatch} from "redux";
import axios from "axios";
import {NurseAction, NurseActionTypes} from "../../types/Nurse";

// export const fetchNurses = (page = 1, limit = 10) => {
export const fetchNurses = () => {
    return async (dispatch: Dispatch<NurseAction>) => {
        try {
            dispatch({type: NurseActionTypes.FETCH_NURSES})
            // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const response = await axios.get('http://localhost:8080/api/v1/nurses');
            dispatch({type: NurseActionTypes.FETCH_NURSES_SUCCESS, payload: response.data});
        } catch (error) {
            dispatch({type: NurseActionTypes.FETCH_NURSES_ERROR, 
                    payload: 'ERROR: Load list of Nurses'
                })
        }
    }

    // return async (dispatch: Dispatch<NurseAction>) => {
    //     try {
    //         dispatch({type: NurseActionTypes.FETCH_NURSES})
    //         const response = await axios.get('http://localhost:8080/api/v1/nurses', {
    //             params: {_page: page, _limit: limit}
    //         })
    //         setTimeout(() => {
    //             dispatch({type: NurseActionTypes.FETCH_NURSES_SUCCESS, payload: response.data})
    //         }, 500)
    //     } catch (e) {
    //         dispatch({
    //             type: NurseActionTypes.FETCH_NURSES_ERROR,
    //             payload: 'ERROR: Load list of Nurses'
    //         })
    //     }
    // }
}
// export function setNursePage(page: number): NurseAction {
//     return {type: NurseActionTypes.SET_NURSE_PAGE, payload: page}
// }