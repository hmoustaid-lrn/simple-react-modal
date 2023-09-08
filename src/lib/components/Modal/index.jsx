import React, {useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Modal = (props) => {

  const [showModal, setShowModal] = useState(true)


  const handleToggle = () => {
    setShowModal(false);
    props.handleResponse()
  };



  return (
    <>
      {showModal && (
        <div>
          <div className="modal-backdrop show"></div>
          <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <h4>{props.text}</h4>
                </div>
                <div className="modal-footer d-flex justify-content-center" style={{ border: 'none' }} >
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
