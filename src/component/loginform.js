import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  let navigate = useNavigate();

  const [username, setUsernam] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form">
      <div className="form-panel one">
        <div className="form-header">
          <h1>Login</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group">
              <label className="username">Username</label>
              <input
                type="text"
                name="username"
                required="required"
                value={username}
                onChange={(event) => setUsernam(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="password">Password</label>
              <input
                type="password"
                name="password"
                required="required"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
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
              <button
                type="submit"
                onClick={() =>
                  navigate("/Home", {
                    state: { username: username /*password: password*/ },
                  })
                }
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
