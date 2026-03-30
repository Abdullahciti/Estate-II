import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { supabase } from "../../lib/supabase";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom"; // محتاجين useParams عشان نجيب الـ ID من الرابط
import { useEffect, useState } from "react";

function SinglePage() {
  const { id } = useParams(); // بيجيب الـ id من الـ URL (مثلاً /post/1)
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostData = async () => {
      // بنعمل Fetch للبيانات من الجدول الرئيسي وبناخد معاها بيانات جدول التفاصيل
      const { data, error } = await supabase
        .from("properties")
        .select(
          `
          *,
          property_details (*) 
        `,
        )
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching post:", error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPostData();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!post) return <div className="error">Post not found!</div>;

  // دمج بيانات الجدولين لسهولة الاستخدام
  const details = post.property_details[0] || {};

  return (
    <div className="singlePage">
      <div className="details">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="wrapper">
            {/* بناخد الصور من جدول التفاصيل */}
            <Slider images={details.images || [post.image_url]} />
            <div className="info">
              <div className="top">
                <div className="post">
                  <h1>{post.title}</h1>
                  <div className="address">
                    <img src="/pin.png" alt="" />
                    <span>{post.address}</span>
                  </div>
                  <div className="price">$ {post.price}</div>
                </div>
              </div>
              {/* الوصف من جدول التفاصيل */}
              <div className="bottom">{details.description}</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="features">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
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
              {/* ... باقي الـ features ثابتة أو ممكن تجيبها من الداتا ... */}
            </div>

            <p className="title">Sizes</p>
            <div className="sizes">
              <div className="size">
                <img src="/size.png" alt="" />
                <span>{details.size} sqft</span>
              </div>
              <div className="size">
                <img src="/bed.png" alt="" />
                <span>{post.bedroom} beds</span>
              </div>
              <div className="size">
                <img src="/bath.png" alt="" />
                <span>{post.bathroom} bathroom</span>
              </div>
            </div>

            <p className="title">Nearby Places</p>
            <div className="listHorizontal">
              <div className="feature">
                <img src="/school.png" alt="" />
                <div className="featureText">
                  <span>School</span>
                  <p>{details.school}</p>
                </div>
              </div>
              <div className="feature">
                <img src="/pet.png" alt="" />
                <div className="featureText">
                  <span>Bus Stop</span>
                  <p>{details.bus}</p>
                </div>
              </div>
              <div className="feature">
                <img src="/fee.png" alt="" />
                <div className="featureText">
                  <span>Restaurant</span>
                  <p>{details.restaurant}</p>
                </div>
              </div>
            </div>

            <p className="title">Location</p>
            <div className="mapContainer">
              {/* بنبعت الإحداثيات للماب */}
              <Map items={[post]} />
            </div>

            <div className="buttons">
              <button>
                <img src="/chat.png" alt="" /> Send a Message
              </button>
              <button>
                <img src="/save.png" alt="" /> Save the Place
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SinglePage;
