import "./aboutPage.scss";
import { motion } from "framer-motion";


const AboutPage = () => {
  return (
    <div className="about">
                <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          exit={{ opacity: 0 }}
        >
      <div className="landing">
        <div className="landing-text">
          <h1>
            <span>SELL</span> PROPERTY IN HEILBRONN
          </h1>
          <p>
            owner-managed brokerage company in southern Germany, GARANT
            Immobilien provides you with reliable support in determining the
            value of residential, real estate and commercial properties.
            <span>
              Find out the market value now quickly, easily and free of charge!
            </span>
          </p>
          <button>Rate Now</button>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
