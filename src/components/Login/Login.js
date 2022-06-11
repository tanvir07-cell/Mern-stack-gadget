import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import authentication from "../../images/Login/authentication.svg";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [signInWithEmailAndPassword, user2, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailChange = (event) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        event.target.value
      )
    ) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      setUserInfo({ ...userInfo, email: "" });
      setErrors({ ...errors, emailError: "Invalid Email Address" });
    }
  };

  const handlePasswordChange = (event) => {
    if (/.{6,}/.test(event.target.value)) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({
        ...error,
        passwordError: "Password Must Contain six character",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userInfo.email && userInfo.password) {
      signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }
  };

  // jodi user thake tahole navigate kore dibo:
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className=" login">
      <div className="w-90 container mt-2">
        <img src={authentication} alt="" className="w-100" />
      </div>
      <Form
        className="w-50 container form  h-50 mt-2 p-5"
        onSubmit={handleFormSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
          {errors?.emailError && (
            <Form.Text className="error-message">
              {errors?.emailError}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          {errors?.passwordError && (
            <Form.Text className="error-message">
              {errors?.passwordError}
            </Form.Text>
          )}
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          className="submit-login-btn w-100"
        >
          login
        </Button>

        <SocialLogin></SocialLogin>
      </Form>
    </div>
  );
};

export default Login;
