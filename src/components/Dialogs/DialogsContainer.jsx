import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";
import {getDialogsPage} from "../../redux/selectors/dialogs-selector";
import {getIsAuth} from "../../redux/selectors/profile-selector";


let mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state),
        isAuth: getIsAuth(state)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageCreator: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthNavigate
)(Dialogs);