import React from 'react'
import './Input.css'
import {useState} from 'react'
import axios from 'axios'

const Input = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Front-end validation
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    // API Integration
    try {
      const response = await axios.post('http://3.228.97.110:9000/api', {email},{
       
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data)

      if (response.status === 200) {
        setSuccessMessage('Form Submitted');
        setError('');
        setEmail('')
      } else if (response.status === 422) {
        setError('Email ends with @ez.works');
      } else {
        setError('An error occurred');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  return (
    <div>
        <div className="input_container">
        <form onSubmit={handleSubmit}>
          {/* {error && <p className="error">{error}</p>}
          {successMessage && <p className="success">{successMessage}</p>} */}
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Contact Me</button>
        </form>
          {error && <p className="error">{error}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
      </div>
    </div>
  )
}

export default Input
