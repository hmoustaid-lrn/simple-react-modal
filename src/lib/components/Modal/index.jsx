import React from 'react'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Modal = (props) => {

  const handleToggle = () => {
    props.toggleModal(!props.showingModal);
  };

  return (
    <>
      {props.showingModal && (
        <div>
          <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <h4>{props.text}</h4>
                </div>
                <div className="modal-footer d-flex justify-content-center" >
                  <button type="button" className="btn btn-primary" onClick={handleToggle}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
