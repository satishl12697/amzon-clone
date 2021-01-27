import React from "react";
import Product from "./Product";
import "./Electronics.css";

function Electronics() {
  return (
    <div className="Electronics">
      <div className="Electronics_imagerow">
        <img
          className="Electronics__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Storage/CEPCBundles/Bundle_store_770x300.jpg"
          alt="Electronics Image"
        />
        <img
          className="Electronics__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Tablets/Samsung/NewLaunch/Mobile/Clearence_store_770x300_revised.jpg"
          alt="Electronics Image"
        />
      </div>

      {/* Product id, title, price, rating, image  */}

      <div className="Electronics_row">
        <Product
          id="131"
          title="Mi Notebook 14  Intel core i3-10110U 10th Gen Thin and Light Laptop (8GB/256GB SSD/Windows 10, Home/Intel UHD Graphics/Silver/1.5Kg), XMA1901-FI"
          price={36999.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71zlGU1N2iL._SX679_.jpg"
        />
        <Product
          id="132"
          title="JBL C115TWS True Wireless Headphone with Built-in Mic, 21 Hours Combined Playtime, Dual Connect and Bluetooth 5.0 (Black)"
          price={4999.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61qOpSe1W6L._SY450_.jpg"
        />
      </div>

      <div className="Electronics_row">
        <Product
          id="133"
          title="Amazfit GTR 2e Smart Watch, 2.5D Curved Bezel-Less Design, 1.39〞Always-on Amoled Display, SpO2 & Stress Monitor, Built-in GPS, 24-Day Battery Life, 90+ Sports Models, 50+ Watch Faces (Obsidian Black)"
          price={9999.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71NKxwMP97L._SX569_.jpg"
        />
        <Product
          id="134"
          title="JBL C100SI In-Ear Deep Bass Headphones with Mic (Black)"
          price={599.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/31Za9ooooCL._AA210_.jpg"
        />
        <Product
          id="135"
          title="beyerdynamic Lagoon ANC Explorer Bluetooth Headphones with ANC and Sound Personalization Grey/Brown"
          price={27022.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/71gNFH5XShL._AC_UY218_.jpg"
        />
      </div>
      <div className="Electronics__banner">
        <img
          className="Electronics__bannerimage"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Newpage/Headphones/Headphones_headers.jpg"
          alt="Electronics Image"
        />
      </div>

      <div className="Electronics_row">
        <Product
          id="136"
          title="boAt Aavante Bar 1500 2.1 Channel Home Theatre Soundbar with 120W boAt Signature Sound, Wired Subwoofer, Multiple Connectivity Modes, Entertainment EQ Modes and Sleek Finish (Black)"
          price={6999.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61Qa%2BzvFzHL._SY450_.jpg"
        />
        <Product
          id="137"
          title="HyperX Cloud Core + 7.1 Gaming Headset for PC, PS4, Xbox One, Nintendo Switch, and Mobile Devices (HX-HSCC-2-BK/WW)"
          price={6199.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5164Sqd8b-L._SY450_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Electronics;
