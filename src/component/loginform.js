import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  let navigate = useNavigate();

  const adminUser = {
    username: "admin",
    password: "password",
  };

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
  };

  const validate = (values) => {
    const error = {};

    if (
      values.username === adminUser.username &&
      values.password === adminUser.password
    ) {
      navigate("/Home", {
        state: { username: values.username /*password: password*/ },
      });
    }

    if (!values.username) {
      error.username = "Username is required";
    } else if (values.username !== adminUser.username) {
      error.username = "Username is Incorrect";
    }

    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password !== adminUser.password) {
      error.password = "Username is Incorrect";
    }
    return error;
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
              <label className="username">Username</label>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <p className="error">{errors.username}</p>
            <div className="form-group">
              <label className="password">Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <p className="error">{errors.password}</p>
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
