import { useState } from "react";
import "./chat.scss";
import { motion } from "framer-motion";

function Chat() {
  const [chat, setChat] = useState(true);
  const [minize, setMinimize] = useState(false);

  const handleMinimize = () => {
    setMinimize((prev) => !prev);
    setChat((prev) => !prev)
  };

  return (
    <div className="chat">
      <div className="messages">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          exit={{ opacity: 0 }}
        >
          <h1>Messages</h1>
          <div className="message">
            <div className="left">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>Jack Doe</span>
            </div>
            <div className="right">
              <p>Hast du noch nicht keine gute Angebote gefunden?</p>
            </div>
          </div>
          <div className="message">
            <div className="left">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>Makler</span>
            </div>
            <div className="right">
              <p>Are you still looking for an offer?</p>
            </div>
          </div>
          <div className="message">
            <div className="left">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>Immoscout</span>
            </div>
            <div className="right">
              <p>Herr Doe, wir haben ein großartiges Angebot für Sie</p>
            </div>
          </div>
          <div className="message">
            <div className="left">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>Ahmed Yasser</span>
            </div>
            <div className="right">
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          <div className="message">
            <div className="left">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>Daniel Tarachenko</span>
            </div>
            <div className="right">
              <p>I found a super Offer</p>
            </div>
          </div>
          <div className="message">
            <div className="left">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>Admin</span>
            </div>
            <div className="right">
              <p>Did you finish your tasks?</p>
            </div>
          </div>
        </motion.div>
      </div>
      {chat && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <div className="chatBox">
            <div className="top">
              <div className="user">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                Jack Doe
              </div>
              <div className="right">
                <span className="minimize" onClick={handleMinimize}>
                  -
                </span>
                <span className="close" onClick={() => setChat(null)}>
                  X
                </span>
              </div>
            </div>
            <div className="center">
              <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet</p>
                <span>30 mins ago</span>
              </div>
              <div className="chatMessage own">
                <p>Hast du noch nicht keine gute Angebote gefunden?</p>
                <span>just now</span>
              </div>
            </div>
            <div className="bottom">
              <textarea></textarea>
              <button>Send</button>
            </div>
          </div>{" "}
        </motion.div>
      )}
      {minize && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <div className="chatBox">
            <div className="top">
              <div className="user">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                Jack Doe
              </div>
              <div className="right">
                <span className="minimize" onClick={handleMinimize}>
                  -
                </span>
                <span className="close" onClick={() => setChat(null)}>
                  X
                </span>
              </div>
            </div>
          </div>{" "}
        </motion.div>
      )}
    </div>
  );
}

export default Chat;
