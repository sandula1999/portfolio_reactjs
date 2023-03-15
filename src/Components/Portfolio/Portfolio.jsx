import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import DWA1 from "../../img/DWA1.png";
import DWA2 from "../../img/DWA2.png";
import DWA3 from "../../img/DWA3.png";
import DWA4 from "../../img/DWA4.png";
import DWA5 from "../../img/DWA5.png";
import DWA6 from "../../img/DWA6.png";
import DWA7 from "../../img/DWA7.png";
import DWA8 from "../../img/DWA8.png";
import DWA9 from "../../img/DWA9.png";
import dwa from "../../img/wda.png";
import dwa1 from "../../img/wda1.png";
import dwa2 from "../../img/wda2.png";
import dwa3 from "../../img/wda3.png";
import dwa4 from "../../img/wda4.png";
import dwa5 from "../../img/wda5.png";
import dwa6 from "../../img/wda6.png";
import dwa7 from "../../img/wda7.png";
import dwa8 from "../../img/wda8.png";
import dwa9 from "../../img/wda9.png";
import dwa10 from "../../img/wda10.png";
import as from "../../img/as.png";
import as1 from "../../img/as1.png";
import as2 from "../../img/as2.png";
import as3 from "../../img/as3.png";
import pf from "../../img/pf.png";
import pf1 from "../../img/pf1.png";
import pf2 from "../../img/pf2.png";
import pf3 from "../../img/pf3.png";
import pf4 from "../../img/pf4.png";
import pf5 from "../../img/pf5.png";
import rp from "../../img/rp.png";
import rp1 from "../../img/rp1.png";
import rp2 from "../../img/rp2.png";
import rp3 from "../../img/rp3.png";
import rp4 from "../../img/rp4.png";
import rp5 from "../../img/rp5.png";
import sw from "../../img/sw.png";
import sw1 from "../../img/sw1.png";
import sw2 from "../../img/sw2.png";
import sw3 from "../../img/sw3.png";
import sw4 from "../../img/sw4.png";
import pw from "../../img/pw.png";
import pw1 from "../../img/pw1.png";
import pw2 from "../../img/pw2.png";
import pw3 from "../../img/pw3.png";
import pw4 from "../../img/pw4.png";
import pw5 from "../../img/pw5.png";
import pw6 from "../../img/pw6.png";
import pw7 from "../../img/pw7.png";
import "swiper/css";

const portfolio = () => {
  return (
    <div className="projects">
      <div className="portfolio" id="Portfolio">
        <span>My Projects</span>
        <span>DAISY's Wardrobe (HTML/CSS/PHP)</span>
        <Swiper
          spaceBetween={500}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <div className="blur4" style={{ background: "#C1F5FF" }}></div>

          <SwiperSlide>
            <img src={DWA1} alt="" />
          </SwiperSlide>
          <div
            className="blur3"
            style={{ background: "rgb (238 210 255)" }}
          ></div>
          <SwiperSlide>
            <img src={DWA2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DWA3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DWA4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DWA5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DWA6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DWA7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DWA8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DWA9} alt="" />
          </SwiperSlide>
        </Swiper>
        <span>Swipe to seee more</span>
      </div>
      <div className="portfolio2">
        <span>Department Of Agriculture (HTML/CSS/PHP)</span>
        <Swiper
          spaceBetween={400}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio2-slider"
        >
          <div className="blur4" style={{ background: "#C1F5FF" }}></div>

          <SwiperSlide>
            <img src={dwa} alt="" />
          </SwiperSlide>
          <div
            className="blur3"
            style={{ background: "rgb (238 210 255)" }}
          ></div>
          <SwiperSlide>
            <img src={dwa1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dwa2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dwa3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dwa4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dwa5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dwa6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dwa7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dwa8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dwa9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dwa10} alt="" />
          </SwiperSlide>
        </Swiper>
        <span>Swipe to seee more</span>
      </div>
      <div className="portfolio3">
        <span>Cleaning App (Android Studio / JAVA)</span>
        <Swiper
          spaceBetween={400}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio3-slider"
        >
          <div className="blur4" style={{ background: "#C1F5FF" }}></div>

          <SwiperSlide>
            <img src={as} alt="" />
          </SwiperSlide>
          <div
            className="blur3"
            style={{ background: "rgb (238 210 255)" }}
          ></div>
          <SwiperSlide>
            <img src={as1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={as2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={as3} alt="" />
          </SwiperSlide>
        </Swiper>
        <span>Swipe to seee more</span>
      </div>
      <div className="portfolio4">
        <span>Portfolio Website (HTML/CSS)</span>
        <Swiper
          spaceBetween={400}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio4-slider"
        >
          <div className="blur4" style={{ background: "#C1F5FF" }}></div>

          <SwiperSlide>
            <img src={pf} alt="" />
          </SwiperSlide>
          <div
            className="blur3"
            style={{ background: "rgb (238 210 255)" }}
          ></div>
          <SwiperSlide>
            <img src={pf1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pf2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pf3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pf4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pf5} alt="" />
          </SwiperSlide>
        </Swiper>
        <span>Swipe to seee more</span>
      </div>
      <div className="portfolio5">
        <span>Portfolio Website (React JS)</span>
        <Swiper
          spaceBetween={400}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio5-slider"
        >
          <div className="blur4" style={{ background: "#C1F5FF" }}></div>

          <SwiperSlide>
            <img src={rp} alt="" />
          </SwiperSlide>
          <div
            className="blur3"
            style={{ background: "rgb (238 210 255)" }}
          ></div>

          <SwiperSlide>
            <img src={rp1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={rp2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={rp3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={rp4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={rp5} alt="" />
          </SwiperSlide>
        </Swiper>
        <span>Swipe to seee more</span>
      </div>

      <div className="portfolio6">
        <span>Swimming Web (WordPress)</span>
        <Swiper
          spaceBetween={400}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio6-slider"
        >
          <div className="blur4" style={{ background: "#C1F5FF" }}></div>

          <SwiperSlide>
            <img src={sw} alt="" />
          </SwiperSlide>
          <div
            className="blur3"
            style={{ background: "rgb (238 210 255)" }}
          ></div>

          <SwiperSlide>
            <img src={sw1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sw2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sw3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sw4} alt="" />
          </SwiperSlide>
        </Swiper>
        <span>Swipe to seee more</span>
      </div>
      <div className="portfolio7">
        <span>Portfolio (WordPress)</span>
        <Swiper
          spaceBetween={400}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio7-slider"
        >
          <div className="blur4" style={{ background: "#C1F5FF" }}></div>

          <SwiperSlide>
            <img src={pw} alt="" />
          </SwiperSlide>
          <div
            className="blur3"
            style={{ background: "rgb (238 210 255)" }}
          ></div>

          <SwiperSlide>
            <img src={pw1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pw2} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={pw3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pw4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pw5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pw6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pw7} alt="" />
          </SwiperSlide>
        </Swiper>
        <span>Swipe to seee more</span>
      </div>
    </div>
  );
};

export default portfolio;
