import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const portalElement = document.getElementById("modal");

// const Backdrop = (props) => {
//     return (
//         <div className={classes.backdrop} onClick={props.onClose}>
//             {props.children}
//         </div>
//     );
// };

const Modal = (props) => {
    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    };
    return (
        <>
            {ReactDom.createPortal(
                <div className={classes.backdrop} onClick={closeModal}>
                    <div className={classes.modal}>{props.children}</div>
                </div>,
                portalElement
            )}
            {/* {ReactDom.createPortal(
                <div className={classes.modal}> {props.children}</div>,
                portalElement
            )} */}
        </>
    );
};

export default Modal;
