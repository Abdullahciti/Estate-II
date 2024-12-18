/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./signIn.scss";

// Icons
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SignIn = ({ username, password }) => {
  const [showPass, setShowPass] = useState(true);

  const { isSignedIn, setIsSignedIn } = useAuth();

  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    usernameInput: username,
    passwordInput: password,
  });


  const navigate = useNavigate();

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", formData);
    // Add your login logic here
    if (
      formData.usernameInput.toLowerCase() === "admin" &&
      formData.passwordInput.toLowerCase() === "admin"
    ) {
      navigate("/profile");
      setIsSignedIn(true);
    } else {
      setError("error");
    }
  };

  return (
    <div className="sign-in">
      <h2 className="header">Sign In</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            aria-label="username"
            placeholder={formData.usernameInput}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <div className="pass">
            <input
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              value={formData.passwordInput}
              required
            />
            {showPass && <VscEye onClick={handleShowPass} />}
            {!showPass && <VscEyeClosed onClick={handleShowPass} />}
          </div>
        </div>
        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
      <div className="bottom">
        <h6>if you don`t have an account, so you are missing to        
        <Link
              aria-label="sign-up button"
              to="/signup"
              className="register"
            >
              register  
            </Link>
            </h6>
      </div>
    </div>
  );
};

export default SignIn;
