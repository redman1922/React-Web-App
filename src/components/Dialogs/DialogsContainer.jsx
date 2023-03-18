import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessageCreator: (body) => {
            dispatch(sendMessageCreator());
        },
    }
}




export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthNavigate
)(Dialogs);