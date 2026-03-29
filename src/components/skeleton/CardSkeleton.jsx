import "./cardSkeleton.scss";

const CardSkeleton = () => {
  return (
    <div className="card skeleton-wrapper">
      {/* الجزء الخاص بالصورة */}
      <div className="imageContainer skeleton"></div>

      {/* الجزء الخاص بالنصوص */}
      <div className="textContainer">
        <div className="title skeleton"></div>
        
        <div className="address-wrapper">
          <div className="icon-small skeleton"></div>
          <div className="address skeleton"></div>
        </div>

        <div className="price skeleton"></div>

        <div className="bottom">
          <div className="features">
            <div className="feature-item skeleton"></div>
            <div className="feature-item skeleton"></div>
          </div>
          
          <div className="icons">
            <div className="icon-circle skeleton"></div>
            <div className="icon-circle skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;