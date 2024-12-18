import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function SinglePage() {
  const { isSignedIn } = useAuth();

  return (
    <>
      {isSignedIn ? (
        <div className="singlePage">
          <div className="details">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              exit={{ opacity: 0 }}
            >
              <div className="wrapper">
                <Slider images={singlePostData.images} />
                <div className="info">
                  <div className="top">
                    <div className="post">
                      <h1>{singlePostData.title}</h1>
                      <div className="address">
                        <img src="/pin.png" alt="" />
                        <span>{singlePostData.address}</span>
                      </div>
                      <div className="price">$ {singlePostData.price}</div>
                    </div>
                    <div className="user">
                      <img src={userData.img} alt="" />
                      <span>{userData.name}</span>
                    </div>
                  </div>
                  <div className="bottom">{singlePostData.description}</div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="features">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              exit={{ opacity: 0 }}
            >
              <div className="wrapper">
                <p className="title">General</p>
                <div className="listVertical">
                  <div className="feature">
                    <img src="/utility.png" alt="" />
                    <div className="featureText">
                      <span>Utilities</span>
                      <p>Renter is responsible</p>
                    </div>
                  </div>
                  <div className="feature">
                    <img src="/pet.png" alt="" />
                    <div className="featureText">
                      <span>Pet Policy</span>
                      <p>Pets Allowed</p>
                    </div>
                  </div>
                  <div className="feature">
                    <img src="/fee.png" alt="" />
                    <div className="featureText">
                      <span>Property Fees</span>
                      <p>Must have 3x the rent in total household income</p>
                    </div>
                  </div>
                </div>
                <p className="title">Sizes</p>
                <div className="sizes">
                  <div className="size">
                    <img src="/size.png" alt="" />
                    <span>80 sqft</span>
                  </div>
                  <div className="size">
                    <img src="/bed.png" alt="" />
                    <span>2 beds</span>
                  </div>
                  <div className="size">
                    <img src="/bath.png" alt="" />
                    <span>1 bathroom</span>
                  </div>
                </div>
                <p className="title">Nearby Places</p>
                <div className="listHorizontal">
                  <div className="feature">
                    <img src="/school.png" alt="" />
                    <div className="featureText">
                      <span>School</span>
                      <p>250m away</p>
                    </div>
                  </div>
                  <div className="feature">
                    <img src="/pet.png" alt="" />
                    <div className="featureText">
                      <span>Bus Stop</span>
                      <p>100m away</p>
                    </div>
                  </div>
                  <div className="feature">
                    <img src="/fee.png" alt="" />
                    <div className="featureText">
                      <span>Restaurant</span>
                      <p>200m away</p>
                    </div>
                  </div>
                </div>
                <p className="title">Location</p>
                <div className="mapContainer">
                  <Map items={[singlePostData]} />
                </div>
                <div className="buttons">
                  <button>
                    <img src="/chat.png" alt="" />
                    Send a Message
                  </button>
                  <button>
                    <img src="/save.png" alt="" />
                    Save the Place
                  </button>
                </div>
              </div>
            </motion.div>
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

export default SinglePage;
