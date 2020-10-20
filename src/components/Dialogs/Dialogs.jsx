import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.dialogs;
    let messages = props.messages;

    let newMessageElement = React.createRef();

    let changeMessage = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    }

    let addMessage = () => {
        let text = newMessageElement.current.value;
        newMessageElement.current.value = '';
        props.onAddMessage(text);
    }

    let createDialogItems = () => {
        return (dialogs.map((el) => {
                return <DialogItem name={el.name} id={el.id} key={el.id}/>;
        }));
    }

    let createMessageItems = () => {
        return (messages.map((el) => {
            return <Message message={el.message} id={el.id} key={el.id}/>;
        }));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {
                    createDialogItems()
                }
            </div>
            <div className={s.messages}>
                {
                    createMessageItems()
                }
            </div>
            <div>
                <textarea value={props.newMessageText} onChange={changeMessage} ref={newMessageElement}/>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;