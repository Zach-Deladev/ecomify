// PaymentSuccess.js

import React from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}>
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase.</p>
        <button onClick={() => navigate('/')}>Go to Homepage</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
