import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthLocation } from "../../hoc/withAuthLocation";
import { resetNewMessageTextAC, sendMessageAC, updateNewMessageTextAC } from "../../Redux/dialogs-reduser";
import Messages from "./Messages"

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
            dispatch(resetNewMessageTextAC());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextAC(text));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthLocation
)(Messages)