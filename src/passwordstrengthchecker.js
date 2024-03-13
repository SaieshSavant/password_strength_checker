import React, { useState } from 'react';

function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const checkPasswordStrength = () => {
    const passwordStrength = calculatePasswordStrength(password);
    setStrength(passwordStrength);
  };

  const calculatePasswordStrength = (password) => {
    const veryStrongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;
    const fairRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (veryStrongRegex.test(password)) {
      return 'Very Strong';
    } else if (strongRegex.test(password)) {
      return 'Strong';
    } else if (fairRegex.test(password)) {
      return 'Fair';
    } else {
      return 'Too Weak';
    }
  };

  return (
    <div style={styles.container}>
      <h1>Password Strength Checker</h1>
      <div>
        <label htmlFor="password" style={styles.label}>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          style={styles.input}
        />
      </div>
      <button onClick={checkPasswordStrength} style={styles.button}>Check Strength</button>
      {strength && <p style={{ ...styles.strength, color: strength === 'Too Weak' ? 'red' : 'green' }}>Strength: {strength}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: '16px',
  },
  button: {
    padding: '12px 24px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  strength: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '16px',
  }
};

export default PasswordStrengthChecker;
