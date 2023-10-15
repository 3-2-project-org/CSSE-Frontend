import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../Login/Login.css";
import { resetPassword } from "../../../../api/auth";
import { useNavigate } from "react-router";
import { getDataFromLocalStorage } from "../../../../utils/accessLocalStorage";
const ResetPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { mutate, isSuccess, data } = resetPassword();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const { email} = getDataFromLocalStorage("user");
    mutate({ password: newPassword, confirmPassword: newPassword, email });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/auth/login");
    } else {
      alert("Something went wrong");
    }
  }, [isSuccess, data]);

  return (
    <div className="login-container">
      <div className="login-div">
        <div className="header">
          <h1>PrimeBuild Construction</h1>
          <h2>Reset Password</h2>
        </div>
        <div className="sub-header">
          <p style={{ color: "#9FA2B4" }}>
            Enter your curren password and new password below
          </p>
        </div>
        <div className="input-container">
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <div className="flex absolute right-2 top-1 bottom-1">
              {showPassword ? (
                <VisibilityIcon onClick={togglePasswordVisibility} />
              ) : (
                <VisibilityOffIcon onClick={togglePasswordVisibility} />
              )}
            </div>
          </div>

          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              ic
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
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
