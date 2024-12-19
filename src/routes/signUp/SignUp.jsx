// Icons
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

import { useState } from "react";
import "./signUp.scss";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ setUsername, setPassword, takenUsernames }) => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  

  const [err, setErr] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      // Allow only letters, numbers, and underscores in the username
      const sanitizedValue = value.replace(/[^a-zA-Z0-9_]/g, "");
      if (value !== sanitizedValue) {
        setErr("Only letters, numbers, and underscores are allowed in the username.");
      } else {
        setErr(null);
      }
      setFormData({
        ...formData,
        [name]: sanitizedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErr("Passwords do not match!");
      return;
    } else if (!formData.name.trim()) {
      setErr("Username cannot be empty.");
      return;
    } else if (takenUsernames.includes(formData.name)) {
      setErr("Username is already taken. Please choose another.");
      return;
    }

    // Successful signup
    console.log("Sign Up Data:", formData);
    window.localStorage.clear();
    setUsername(formData.name);
    window.localStorage.setItem("username", formData.name);
    window.localStorage.setItem("email", formData.email);
    setPassword(formData.password);
    window.localStorage.setItem("password", formData.password);
    navigate("/profile");
  };

  return (
    <div className="form-container">
      <h2 className="header">Sign Up</h2>

      {err && <div className="error">{err}</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required
            />
            {showPass ? (
              <VscEye onClick={handleShowPass} />
            ) : (
              <VscEyeClosed onClick={handleShowPass} />
            )}
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type={showPass ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
      <div className="bottom">
        <h6>
          If you already have an account, you are missing to{" "}
          <Link aria-label="sign-in button" to="/signin" className="sign-in">
            Log in
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default SignUp;
