import React from "react";
import { Link } from "react-router-dom";

const Registered = () => {
  return (
    <div className="container my-4 ">
      <div className="h-100 d-flex align-items-center justify-content-center">
        <i class="bi bi-check-circle text-success icon-100"></i>
      </div>
      <div className="text-center">
        <h1>Congratulations!</h1>
        <h4>You've completed your registration</h4>
        <p>
          Now you can <Link to="/login">login</Link> by using your registered
          credentials!
        </p>
      </div>
    </div>
  );
};

export default Registered;
