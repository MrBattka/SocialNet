
import classes from './Messages.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageActionCreater, updateNewMessageTextActionCreater } from '../../Redux/dialogs-reduser';

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={classes.message}>
            { props.message }
        </div>
    )
}

const Messages = (props) => {
    
    let sendMessage = React.createRef();
    let send = () => {
        let action = sendMessageActionCreater();
        props.dispatch(action);
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: ''});
        sendMessage.current.value = '';
    }
    let newMessageText = () => {
        let text = sendMessage.current.value;
        let action = updateNewMessageTextActionCreater(text);
        props.dispatch(action);
    }

    let dialogsElement = props.dialogsData.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.dialogsData.messages.map(m => <Message message={m.message} />);

    return (

        <div className={classes.wrapper__messages}>

            <h2 className={classes.title}>Dialogs</h2>
            <div className={classes.dialogs}>
                { dialogsElement }
            </div>
            <span className={classes.stick}></span>
            <div className={classes.flexbox}>
                <div className={classes.wrapper__messanger}>
                    <div className={classes.messanger}>
                        { messagesElement }
                    </div>
                </div>
            </div>
            <div className={classes.textMessage}>
                <textarea ref={ sendMessage } onChange={ newMessageText } value={props.newMessageText} autoFocus />
            </div>
            <div className={classes.btn}>
                <div className={classes.btnSend}>
                    <button onClick={ send }>Send</button>
                </div>
            </div>
        </div>

    )
}


export default Messages;