import classes from './Messages.module.css';
import React from 'react';
import DialogItem from './DilogItem/DialogItem';
import Message from './Message/Message';
import { MessageFormRedux } from './MessageForm/MessageForm';

const Messages = (props) => {

    let addNewMessage = (values) => {
        if (values.newMessageBody) {
            props.sendMessage(values.newMessageBody)
            values.newMessageBody = ''
        }
    }

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElement = props.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

    return (
        <div className={classes.wrapper__messages}>
            {<div className={classes.wrapper_dev}><h2 className={classes.dev}>Currently under development</h2></div> ??
                <div>
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
                </div>}
        </div>
    )
}


export default Messages;