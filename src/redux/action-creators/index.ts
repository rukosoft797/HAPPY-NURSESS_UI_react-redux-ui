import * as NurseActionCreators from "./nurse";
import * as PatientActionCreators from "./patient";

export default {
    ...NurseActionCreators,
    ...PatientActionCreators
}