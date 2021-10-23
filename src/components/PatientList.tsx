import React,{useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const PatientList: React.FC = () => {
    const {patients,error,limit,loading,page} = useTypedSelector(state => state.patient);
    const {fetchPatients,setPatientPage} = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect( () => {
        fetchPatients(page, limit);
    },[page] )

    if( loading){
        <h1>Loading Patient List...</h1>
    }
    if(error){
        <h1>{error}</h1>
    }
    return (
        <div>
            {patients.map( patient =>
                // <div key={patient.id}>{patient.id} - {patient.title}</div>
                <div key={patient.patientId}>{patient.patientId} - {patient.firstName} {patient.lastName}</div>
                )}
                <div style={{display: "flex"}}>
                    {pages.map( p =>
                        <div
                        // onClick={()=> setPatientPage(p)}
                        style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
                        >
                            {p}
                        </div>)}
                </div>
        </div>
    )
}

export default PatientList
