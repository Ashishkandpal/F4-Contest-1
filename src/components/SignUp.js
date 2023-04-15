import { useRef } from "react";
import "./SignUp.css";

const SignUp = () => {
  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const inputConfirmPasswordRef = useRef(null);

  const validateHandler = (e) => {
    e.preventDefault();

    const fullName = inputNameRef.current.value;
    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;
    const confirmPassword = inputConfirmPasswordRef.current.value;
    const err = document.querySelector(".error");
    const success = document.querySelector(".success");

    let errString = "";

    if (fullName.length <= 3) {
      if (fullName === "") {
        errString += "Full Name is empty";
      } else {
        errString += "Name must be greater than 3 words ";
      }
    }
    if (!email.includes("@")) {
      if (email === "") {
        errString +=
          errString.length !== 0
            ? ", Email field is empty "
            : "Email field is empty";
      } else {
        errString +=
          errString.length !== 0 ? ", invalid mail " : "invalid mail ";
      }
    }
    if (
      password === "" ||
      confirmPassword === "" ||
      password !== confirmPassword
    ) {
      if (password === "") {
        errString +=
          errString.length !== 0 ? ", Password is empty" : "Password is empty";
      } else if (confirmPassword === "") {
        errString +=
          errString.length !== 0
            ? ", Confirm Password is empty"
            : "Confirm Password is empty";
      } else {
        errString +=
          errString.length !== 0 ? ", password mismatch" : "password mismatch";
      }
    } else {
      success.textContent = "successfully signed up";
    }
    err.textContent = errString;
    if (err.textContent) {
      success.textContent = "";
    }
  };
  return (
    <div className="main">
      <h1>Sign Up</h1>
      <form action="#">
        <input
          ref={inputNameRef}
          id="full-name"
          type="text"
          placeholder="Full Name"
        />
        <input
          ref={inputEmailRef}
          id="email"
          type="email"
          placeholder="Email"
        />
        <input
          ref={inputPasswordRef}
          id="password"
          type="password"
          placeholder="Password"
        />
        <input
          ref={inputConfirmPasswordRef}
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <div className="status">
          <div className="error"></div>
          <div className="success"></div>
        </div>
        <button className="btn" onClick={validateHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
