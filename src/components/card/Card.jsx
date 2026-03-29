import { Link } from "react-router-dom";
import "./card.scss";
import { useState } from "react";

function Card({ item }) {
  // حالة لمراقبة تحميل الصورة
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="card">
      {/* رابط الصورة لصفحة التفاصيل */}
      <Link to={`/${item.id}`} className="imageContainer">
        {/* السكيلتون يظهر فقط طالما الصورة لم تُحمل بعد */}
        {!imageLoaded && <div className="imgSkeleton" />}
        
        <img
          src={item.image_url}
          alt={item.title}
          loading="lazy" // تحميل كسول لتحسين الأداء
          onLoad={() => setImageLoaded(true)} // تغيير الحالة عند اكتمال التحميل
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.4s ease-in", // تأثير ظهور ناعم
          }}
        />
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        
        <p className="address">
          <img src="/pin.png" alt="pin icon" />
          <span>{item.address}</span>
        </p>
        
        <p className="price">$ {item.price}</p>

        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="bed icon" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="bath icon" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="save icon" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="chat icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;