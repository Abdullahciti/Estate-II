// import { useState } from "react";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import { useAuth } from "../../context/AuthContext";
import "./profilePage.scss";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function ProfilePage({ username, password }) {
  const { isSignedIn, setIsSignedIn } = useAuth();

  const navigate = useNavigate();

  const handleLogOut = () => {
    window.localStorage.clear()
    setIsSignedIn(false);
    navigate("/");
  };

  return (
    <>
      {isSignedIn ? (
        <div className="profilePage">
          <div className="details">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <div className="wrapper">
                <div className="title">
                  <h1>User Information</h1>
                  <button>Update Profile</button>
                </div>
                <div className="info">
                  <div className="left">
                    {" "}
                    <span>
                      Avatar:
                      <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                      />
                    </span>
                    <span>
                      Username: <b>{username}</b>
                    </span>
                    <span>
                      E-mail: <b>{username}@gmail.com</b>
                    </span>
                    <span>
                      Password:{" "}
                      <b>
                        <input type="password" disabled value={password} />
                      </b>
                    </span>
                  </div>
                  <div className="right">
                    <button onClick={handleLogOut}>Log out</button>
                  </div>
                </div>
                <div className="title">
                  <h1>My List</h1>
                  <button>Create New Post</button>
                </div>
                <List />
                <div className="title">
                  <h1>Saved List</h1>
                </div>
                <List />
              </div>
            </motion.div>
          </div>
          <div className="chatContainer">
            {/* عندي فكرة اخلي المحادثات في مكان معلق fixed all in one container */}
            <div className="wrapper">
              <Chat />
            </div>
          </div>
        </div>
      ) : (
        <div className="no-accsess">
          You have no accsses to this page, please{" "}
          <Link aria-label="sign-in button" to="/signin" className="sign-in">
            Log in
          </Link>{" "}
          or{" "}
          <Link aria-label="sign-in button" to="/signup" className="register">
            register
          </Link>
        </div>
      )}
    </>
  );
}

export default ProfilePage;
