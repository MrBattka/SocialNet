import { connect } from "react-redux";
import { updateNewMessageTextActionCreater, sendMessageActionCreater } from "../../Redux/dialogs-reduser";
import Messages from "./Messages";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreater());
            dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: '' });
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreater(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer