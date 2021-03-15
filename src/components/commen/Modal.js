import React from 'react';

const Modal = ({ clossEvent = () => { }, children}) => {
    return (
        <div className="modal">
            <p className="clossBox" onClick={() => clossEvent}></p>
            <div className="modalBox">{children}</div>
        </div>
    )
}

export default Modal;