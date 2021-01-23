import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Slides.css";

const content = [
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/T1b/T1c/T1d/Jan-ART_DesktopHero_1x-mignight_unrec._CB662308725_.jpg",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/JanArt21/Amazon_GRD_DesktopHero_Template_1500x600-media._CB662300676_.jpg",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/Xiaomi/GW/D20208680_WLD_Jan_Art_Xiaomi_Uber_DesktopHero_1500x600_2._CB662236529_.jpg",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Jan-ART/Gateway/ATF/21_Jan_Coupons/1500x600._CB662323899_.jpg",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/Engunrec/1500x600-UNREC._CB661796041_.jpg",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/JanART/GW/Day1/Unrec_Gw_1500x600._CB662002876_.jpg",
  },
  {
    image:
      " https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Jan-ART/Gateway/ATF/Day1/PFF/Revised/PFF-fst-1500-600._CB661706110_.jpg",
  },
];

function Slides() {
  return (
    <div>
      <div>
        <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              style={{
                background: `url('${item.image}') no-repeat`,
              }}
            ></div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slides;
