import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="home"
        />
        <div className="home__row">
          <Product
            id={122}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            id={123}
            title="New Apple Watch SE (GPS + Cellular, 44mm) - Gold Aluminum Case with Pink Sand Sport Band            "
            price={300.0}
            image="https://m.media-amazon.com/images/I/81jXe-BkYKL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={124}
            title="Echo Dot (3rd Gen) Plum with Echo Auto"
            price={59.99}
            image="https://m.media-amazon.com/images/I/71-Di+XiEUL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            id={125}
            title="Samsung Electronics Galaxy Note 20 5G Factory Unlocked Android Cell Phone | US Version | 128GB of Storage | Mobile Gaming Smartphone"
            price={999.99}
            image="https://m.media-amazon.com/images/I/81AczAgBE1L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={126}
            title="New Apple MacBook Pro (13-inch, 16GB RAM, 1TB SSD Storage, Magic Keyboard) - Space Gray"
            price={1199.99}
            image="https://m.media-amazon.com/images/I/71bElkQQ7LL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={128}
            title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
            price={2499.99}
            image="https://m.media-amazon.com/images/I/81Wt3h7-V2L._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
