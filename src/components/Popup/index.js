import React from 'react';
import './style.scss'; // Import your CSS file for styling
import CheckImg from '../../assets/images/check.png';

function Popup({ onClose }) {
  const togglePopup = () => {
    onClose(true);
  };

  return (
    <div className="popup-container">
      {/* <button onClick={togglePopup}>Open Popup</button> */}

      <div className="popup">
        <div className="popup-content">
          <p
            style={{
              margin: 0,
              marginBottom: 20,
              padding: '20px 0 0 10px',
              lineHeight: 0,
              fontSize: 14,
              color: 'green',
              textAlign: 'center',
            }}
          >
            Email Sent Successfully
          </p>
          <div
            style={{
              width: 150,
              textAlign: 'center',
              margin: 'auto',
              // padding: '0 100px',
            }}
          >
            <img src={CheckImg} width={'100%'} alt="check img" />
          </div>
          <button onClick={togglePopup}>Close</button>
        </div>
        <div className="popup-overlay" onClick={togglePopup}></div>
      </div>
    </div>
  );
}

export default Popup;
