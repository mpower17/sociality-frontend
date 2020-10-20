import {addMessageAC} from "../../redux/actions/actionCreators/addMessageAC";
import {changeMessageTextAC} from "../../redux/actions/actionCreators/changeMessageTextAC";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(changeMessageTextAC(text));
        },
        onAddMessage: (text) => {
            dispatch(addMessageAC(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;