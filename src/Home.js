import React from "react";
import primeBanner from "./images/prime_banner.jpg";
import "./Home.css";
import Product from "./Product";
import redmi from "./images/redmi_note10.png";
import echo_dot from "./images/echo_dot.jpg";
import ipad from "./images/ipad_mini.jpg";
import heater from "./images/heater.jpg";
import dettol from "./images/dettol.jpg";
import moniter from "./images/moniter.jpg";

function Home() {
  return (
    <div className="home">
      <img className="home_img" src={primeBanner} alt="Amazon Prime Banner" />

      <div className="product_row">
        <Product
          id="123456"
          title="Redmi note 10(Aqua Green, 4GB RAM, 64GB Storage)"
          price={15000}
          rating={5}
          image={redmi}
        />
        <Product
          id="123457"
          title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
          price={3499}
          rating={4}
          image={echo_dot}
        />
      </div>
      <div className="product_row">
        <Product
          id="123458"
          title="2021 Apple iPad Mini with A15 Bionic chip (Wi-Fi, 256GB) - Starlight (6th Generation)"
          price={60900}
          rating={4}
          image={ipad}
        />
        <Product
          id="123459"
          title="
          USHA Quartz Room Heater with Overheating Protection (3002, Ivory, 800-Watt)"
          price={1149}
          rating={3}
          image={heater}
        />
        <Product
          id="123453"
          title="
          Dettol Clinical Strength Hand Sanitizer Liquid, 500ml | 70% Alcohol, Kills 99.99% Germs"
          price={200}
          rating={4}
          image={dettol}
        />
      </div>
      <div className="product_row">
        <Product
          id="123460"
          title="LG Ultragear 60 cm (24 inches) 144Hz, Native 1ms Full HD Gaming Monitor with Radeon Freesync - TN Panel with Display Port, HDMI, Height Adjust Stand Made in India- 24GL650F (Black)"
          price={13999}
          rating={4}
          image={moniter}
        />
      </div>
    </div>
  );
}

export default Home;
