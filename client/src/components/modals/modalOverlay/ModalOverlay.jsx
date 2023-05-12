import React from 'react'
import "./modalOverlay.scss"

export default function ModalOverlay({children, isActive, setActive}) {
    const overlayClickHandler = (e) => {
        e.stopPropagation();
        return setActive(!isActive);
    }
    if(!isActive) return null;
  return (
    <div className="modal active" id="modal-id">
        <a href="#close" className="modal-overlay" aria-label="Close"
           onClick={overlayClickHandler}
        >{null}</a>
        {children}
    </div>
  )
}
