import React, { useState } from 'react';
import "./EmailPopup.css";

const EmailPopup = ({ onClose }) => {
  const [stage, setStage] = useState(0); // 0: Initial stage, 1: Email entry stage, 2: Confirmation stage
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleYesClick = () => {
    setStage(1); // Move to the email entry stage
  };

  const handleNoClick = () => {
    onClose(); // Close the popup
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Simulate submitting the email (you can add actual API calls here)
    // For demonstration, just log the email to console and generate a random confirmation code
    console.log('Submitted email:', email);
    const code = Math.random().toString(36).substring(7);
    setConfirmationCode(code);
    setStage(2); // Move to the confirmation stage
  };

  const handleConfirmationClose = () => {
    onClose(); // Close the popup
  };

  return (
    <div className="email-popup">
      <div className="overlay"></div>
      {stage === 0 && (
        <div className="modal fade show" id="emailPopup" tabIndex="-1" aria-labelledby="emailPopupLabel" aria-hidden="true" style={{ display: 'block', zIndex: '1050' }}>
          <div className="modal-dialog modal-dialog-centered" style={{ zIndex: '1060' }}>
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="emailPopupLabel">DO YOU WANT 40% OFF?</h3>
                <button type="button" className="btn-close" onClick={handleNoClick} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Ending tonight</p>
                <button className="btn btn-success me-2" onClick={handleYesClick}>YES</button>
                <button className="btn btn-secondary" onClick={handleNoClick}>NO, I'LL PAY FULL PRICE</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {stage === 1 && (
        <div className="modal fade show" id="emailPopup" tabIndex="-1" aria-labelledby="emailPopupLabel" aria-hidden="true" style={{ display: 'block', zIndex: '1050' }}>
          <div className="modal-dialog modal-dialog-centered" style={{ zIndex: '1060' }}>
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="emailPopupLabel">ONE LAST STEP...</h3>
                <button type="button" className="btn-close" onClick={handleNoClick} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <button type="submit" className="btn btn-success">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {stage === 2 && (
        <div className="modal fade show" id="emailPopup" tabIndex="-1" aria-labelledby="emailPopupLabel" aria-hidden="true" style={{ display: 'block', zIndex: '1050' }}>
        <div className="modal-dialog modal-dialog-centered" style={{ zIndex: '1060' }}>
          <div className="modal-content">
            <div className="modal-header text-center">
            <h3 className="modal-title" id="emailPopupLabel">THANKS, 40% OFF AUTOMATICALLY APPLIED...</h3>
            </div>
            <div className="modal-body text-center mt-3">
              <button type="button" className="btn btn-success" onClick={handleConfirmationClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default EmailPopup;
