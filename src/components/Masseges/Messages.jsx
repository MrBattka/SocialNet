import classes from './Messages.module.css';
import React from 'react';
import DialogItem from './DilogItem/DialogItem';
import Message from './Message/Message';
import { MessageFormRedux } from './MessageForm/MessageForm';

const Messages = (props) => {
    let id = 1
    let addNewMessage = (values) => {
        id++
        props.sendMessage(values.newMessageBody, id);
    }

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElement = props.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);

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
            <MessageFormRedux onSubmit={addNewMessage} />
        </div>

    )
}


export default Messages;