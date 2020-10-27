import {addMessage} from "../../redux/actions/actionCreators/addMessageAC";
import {changeMessageText} from "../../redux/actions/actionCreators/changeMessageTextAC";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    changeMessageText
})(Dialogs);

export default DialogsContainer;
