import classes from './Messages.module.css';
import React from 'react';
import DialogItem from './DilogItem/DialogItem';
import Message from './Message/Message';


const Messages = (props) => {

    let sendMessage = React.createRef();
    let send = () => {
        if (props.newMessageText == false) {
            sendMessage.current.focus();
            return false;
        } else {
            props.sendMessage()
            sendMessage.current.focus();
        }
    }
    let newMessageText = () => {
        let text = sendMessage.current.value;
        props.updateNewMessageText(text)
    }

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.messages.map(m => <Message message={m.message} />);

    return (

        <div className={classes.wrapper__messages}>

            <h2 className={classes.title}>Dialogs</h2>
            <div className={classes.dialogs}>
                {dialogsElement}
            </div>
            <span className={classes.stick}></span>
            <div className={classes.flexbox}>
                <div className={classes.wrapper__messanger}>
                    <div className={classes.messanger}>
                        {messagesElement}
                    </div>
                </div>
            </div>
            <div className={classes.textMessage}>
                <textarea ref={ sendMessage } onChange={ newMessageText } value={ props.newMessageText } autoFocus />
            </div>
            <div className={classes.btn}>
                <div className={classes.btnSend}>
                    <button onClick={send}>Send</button>
                </div>
            </div>
        </div>

    )
}


export default Messages;