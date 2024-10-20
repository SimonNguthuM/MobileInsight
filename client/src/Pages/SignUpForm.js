import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (success || error) {
      setSuccess('');
      setError('');
    }
  };

  const validateForm = () => {
    if (!formData.username || !formData.password) {
      setError('Both username and password are required.');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5555/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess('User signed up successfully!');
        setFormData({ username: '', password: '', confirmPassword: '' });
      } else if (response.status === 409) {
        setError('Username already taken. Please try a different one.');
      } else {
        setError('Failed to sign up. Please try again.');
      }
    } catch (error) {
      setError('Failed to sign up due to a network error. Please try again.');
      console.error('Error signing up:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
      {error && <p style={{ color: 'red' }} aria-live="assertive">{error}</p>}
      {success && <p style={{ color: 'green' }} aria-live="polite">{success}</p>}
    </form>
  );
};

export default SignUpForm;
