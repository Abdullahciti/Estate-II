import { useState } from "react";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import { motion } from "framer-motion";

function ProfilePage() {
  
  const [isLogging, setIsLogging] = useState(false)
  console.log(isLogging);
  return (
    <div className="profilePage">
      <div className="details">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        exit={{ opacity: 0 }}
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
                Username: <b>John Doe</b>
              </span>
              <span>
                E-mail: <b>john@gmail.com</b>
              </span>
            </div>
            <div className="right">
              <button
              onClick={() => setIsLogging(prev => !prev)}
              >Log out</button>
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
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
