import React from "react";
import { useDispatch } from "react-redux";

const LoginBtn = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({
      type: "toggleLogin",
    });
  };

  return (
    <>
      <div className="nav-o-c " id="login-box">
        <span onClick={handleLogin}>LOGIN</span>
      </div>
    </>
  );
};

export default LoginBtn;
