import React, { useEffect, useRef, useState } from "react";
import Error from "./shared/Error";

export default function Login() {
  let [inpErrors, setInpErrors] = useState({});
  let [inputformData, setInputFormData] = useState({
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    setInputFormData({ ...inputformData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  const Validators = (e) => {
    var ValidatorsErr = {};
    if (inputformData?.email.trim() === "") {
      ValidatorsErr.email = "email is required";
    }
    // if(InputformData)
    if (inputformData.password.trim() === "")
      ValidatorsErr.password = "Password is required!";

    setInpErrors(ValidatorsErr);
  };
  function handleLog(event) {
    event.preventDefault();
    Validators(event);
    console.log(inputformData);
  }

  return (
    <div className="container my-4">
      <div className="mx-auto col-md-6 shadow p-4 bg-white rounded">
        <h2>Login</h2>
        <hr></hr>
        <form onSubmit={handleLog}>
          <div className="form-group mb-4">
            <input
              type="text"
              name="email"
              onChange={(e) => HandleChange(e)}
              className="form-control"
              placeholder="Enter Email"
            />
            <div className="validation-error">
              <span>{inpErrors.email}</span>
              <span>{inpErrors.emailpattern}</span>
            </div>
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              name="password"
              onChange={(e) => HandleChange(e)}
              className="form-control"
              placeholder="Enter Password"
            />
            <div className="validation-error">
              <span>{inpErrors.password}</span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            <a
              href="Error"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Login
            </a>
          </button>
          {/* <button type="reset"></button> */}
        </form>
      </div>
    </div>
  );
}
