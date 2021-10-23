import {combineReducers} from "redux";
import {NurseReducer} from "./NurseReducer";
import {PatientReducer} from "./PatientReducer";

export const rootReducer = combineReducers({
    nurse: NurseReducer,
    patient: PatientReducer
})

export type RootState = ReturnType<typeof rootReducer>