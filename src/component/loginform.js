import React from "react";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  let navigate = useNavigate();

  return (
    <div className="form">
      <div className="form-panel one">
        <div className="form-header">
          <h1>Login</h1>
        </div>
        <div class="form-content">
          <form>
            <div className="form-group">
              <label for="username">Username</label>
              <input type="text" name="username" required="required" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" required="required" />
            </div>
            <div className="form-group">
              <label className="form-remember">
                <input type="checkbox" />
                Remember Me
              </label>
              <a class="form-recovery" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="form-group">
              <button type="submit" onClick={() => navigate("/Home")}>
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
