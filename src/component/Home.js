import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

const Home = () => {
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location);

  return (
    <div className>
      <div className="form-header">
        <h1 className="title">Home Page</h1>
      </div>
      <div>
        <h1 className="title">Welcome {location.state.username} </h1>
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
