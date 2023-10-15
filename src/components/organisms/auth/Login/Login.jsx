import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Login.css";
import { login } from "../../../../api/auth";
import { setDataToLocalStorage } from "../../../../utils/accessLocalStorage";
import { useNavigate } from "react-router-dom";
import ToastMessage from "../../../atoms/ToastMessage/ToastMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isSuccess, data } = login();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    mutate({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      setDataToLocalStorage("user", data?.data?.data?.otherDetails);
      setDataToLocalStorage("token", data?.data?.data?.token);
      if (!data?.data?.data?.otherDetails?.is_loggedIn) {    
        navigate("/auth/reset-password");
      } else {
        if (data?.data?.data?.otherDetails?.is_active) {
          if (data?.data?.data?.otherDetails?.type === "supplier") {
            navigate("/supplier/overview");
          } else if (data?.data?.data?.otherDetails?.type === "admin") {
            navigate("/admin/overview");
          } else if (data?.data?.data?.otherDetails?.type === "sales manager") {
            navigate("/procument/overview");
          } else if (data?.data?.data?.otherDetails?.type === "site manager") {
            navigate("/manager/overview");
          }
        }
      }
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isSuccess) {
      setShowToast(true);
      setMessage(data?.message);
    } else {
      setShowToast(true);
      setMessage("Invalid username or password");
    }
  }, [isSuccess]);

  return (
    <div className="login-container">
      <div className="login-div">
        <div className="header">
          <h1>PrimeBuild Construction</h1>
          <h2>Log In</h2>
        </div>
        <div className="sub-header">
          <p style={{ color: "#9FA2B4" }}>
            Enter your email and password below
          </p>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex absolute right-2 top-1 bottom-1">
              {showPassword ? (
                <VisibilityIcon onClick={togglePasswordVisibility} />
              ) : (
                <VisibilityOffIcon onClick={togglePasswordVisibility} />
              )}
            </div>
          </div>
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <button
          className="login-button"
          style={{
            width: "316px",
            height: "48px",
            flexShrink: 0,
            backgroundColor: "#3751FF",
            color: "white",
          }}
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
      <ToastMessage 
        title={message}
        isOpen={showToast}
        description={message}
      />
    </div>
  );
};

export default Login;
