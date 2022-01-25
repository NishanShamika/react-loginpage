import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(null);

    if (!values.email || !values.password) {
      setMessage('Email and Password required');
    } else {
      axios
        .post('http://restapi.adequateshop.com/api/authaccount/login', values)
        .then((response) => {
          console.log(response);
          setMessage(response.data.message);
          if (response.data.message == 'success') {
            navigate('/Home', {
              state: {
                username: response.data.data.Name,
                /* password: password */
              },
            });
          }
        });
    }
  };

  return (
    <div className="form">
      <div className="form-panel one">
        <div className="form-header">
          <h1>Login</h1>
        </div>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="username">Email</label>
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>

            {values.username && <div>{values.username}</div>}
            <div className="form-group">
              <label className="password">Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            {message && <div className="error">{message}</div>}
            <br />
            <div className="form-group">
              <label className="form-remember">
                <input type="checkbox" />
                Remember Me
              </label>
              <a className="form-recovery" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="form-group">
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
