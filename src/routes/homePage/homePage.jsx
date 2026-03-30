import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="boxes">
            {/* 1. سنوات الخبرة */}
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>

            {/* 2. عدد العقارات المتاحة */}
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>

            {/* 3. العملاء السعداء (رقم يعكس حجم الشركة) */}
            <div className="box">
              <h1>5000+</h1>
              <h2>Happy Clients</h2>
            </div>

            {/* 4. الجوائز التي حصلت عليها الشركة */}
            <div className="box">
              <h1>25+</h1>
              <h2>Awards Gained</h2>
            </div>

            {/* 5. الوكلاء المعتمدين لدى المنصة */}
            <div className="box">
              <h1>80+</h1>
              <h2>Certified Agents</h2>
            </div>

            {/* 6. عرض تسويقي قوي (بدل كلمة First Meeting) */}
            <div className="box">
              <h1>0%</h1>
              <h2>Commission Fee*</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <div className="motion">
          <img src="/bg.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
