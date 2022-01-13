import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className>
      <div className="form-header">
        <h1 className="title">Home Page</h1>
      </div>

      <div>
        <button
          className="home-button"
          type="submit"
          onClick={() => navigate("/")}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
