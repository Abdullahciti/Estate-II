/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./signIn.scss";

// Icons
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SignIn = ({ takenUsernames, setUsername, passwords, setPassword }) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);

  const { isSignedIn, setIsSignedIn } = useAuth();

  const [err, setErr] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value,
    })

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      takenUsernames.includes(formData.username) && passwords.includes(formData.password)) {
      setErr(null)
      setUsername(formData.username)
      setPassword(formData.password)
      window.localStorage.setItem("username", formData.username);
      window.localStorage.setItem("password", formData.password);
      navigate("/profile");
      setIsSignedIn(true);
    } else {
      setErr("error");
    }
  };

  if (!isSignedIn) {
    return (
      <div className="sign-in">
        <h2 className="header">Sign In</h2>

        {err && <div className="error">This usename doesn`t exist or the password is worng please make sure you have wrtitten it right or dont miss up to register below!</div>}

        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              aria-label="username"
              placeholder={formData.usernameInput}
              onChange={handleChange}
              value={formData.usernameInput}
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
                aria-label="password"
                onChange={handleChange}
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
          <h6>
            if you don`t have an account, so you are missing to
            <Link aria-label="sign-up button" to="/signup" className="register">
              register
            </Link>
          </h6>
        </div>
      </div>
    );
  } else {
    navigate("/profile");
  }
};

export default SignIn;
