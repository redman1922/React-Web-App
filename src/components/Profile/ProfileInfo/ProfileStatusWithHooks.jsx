import {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    const [editMode,setEditMode] = useState(false);
    const [status,setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activeEditMode = () =>{
       props.isOwner && setEditMode(true);
    }

    const deactiveEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
    }

    return <div className={s.statusText}>

        {
            (!editMode)
                ?<div className={s.profileStatus}> <b>Status</b> <div onDoubleClick={activeEditMode}><span>{props.status || 'No status'}</span></div></div>
                : <div ><input className={s.profileStatusInput} onChange={onStatusChange} autoFocus={true} onBlur={deactiveEditMode}
                              value={status}/></div>
        }

    </div>
}

export default ProfileStatusWithHooks;