import {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    const [editMode,setEditMode] = useState(false);
    const [status,setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activeEditMode = () =>{
        setEditMode(true);
    }

    const deactiveEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
    }

    return <div>
        {
            (!editMode)
                ? <div onDoubleClick={activeEditMode}><span>{props.status || 'No status'}</span></div>
                : <div><input onChange={onStatusChange} autoFocus={true} onBlur={deactiveEditMode}
                              value={status}/></div>
        }

    </div>
}

export default ProfileStatusWithHooks;