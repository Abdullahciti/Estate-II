import List from "../../components/list/List";
import "./profilePage.scss";
import { motion } from "framer-motion";

function ProfilePage() {
  const handleNewPost = () => {};

  return (
    <div className="profilePage">
      <div className="details">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <div className="wrapper">
            <div className="title">
              <h1>My List</h1>
              <button onClick={() => handleNewPost()}>Create New Post</button>
            </div>
            <List />
            <div className="title">
              <h1>Saved List</h1>
            </div>
            <List />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProfilePage;
