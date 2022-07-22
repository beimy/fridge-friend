import React from "react";

const loginModal = props => {
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Login</h4>
                </div>
                <div className="modal-body">
                    This is modal content 
                </div>
                <div className="modal-footer">
                    <button className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default loginModal;