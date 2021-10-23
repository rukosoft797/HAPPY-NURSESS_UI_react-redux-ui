import React,{useEffect} from 'react'
// import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector"
// import {fetchNurses} from "../redux/action-creators/nurse";
import {useActions} from "../hooks/useActions"

const NurseList: React.FC = () => {
    const {nurses,error, loading } = useTypedSelector(state => state.nurse );
    // const dispatch =  useDispatch()
    const {fetchNurses} = useActions();

    useEffect( () =>{
        // dispatch(fetchNurses())
        fetchNurses();
    },[]);
    if( loading){
        <h1>Loading Nurse List...</h1>
    }
    if(error){
        <h1>{error}</h1>
    }
    return (
        <div>
            {nurses.map( nurse =>
                // <div key={nurse.id}>{nurse.name}</div>
                <div key={nurse.nurseId}>{nurse.nurseId} - {nurse.firstName} {nurse.lastName}</div>
                )}
        </div>
    )
}

export default NurseList
