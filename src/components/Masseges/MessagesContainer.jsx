import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthLocation } from "../../hoc/withAuthLocation";
import { sendMessageAC } from "../../Redux/dialogs-reduser";
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
        sendMessage: (newMessageBody, id) => {
            dispatch(sendMessageAC(newMessageBody, id));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthLocation
)(Messages)