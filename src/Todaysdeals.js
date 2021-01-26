import React from "react";
import "./Todaysdeals.css";
import Product from "./Product";

function Todaysdeals() {
  return (
    <div className="Todaysdeals">
      <img
        className="Todaysdeals__image "
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Herotator/HeroPC_1500x600_1._CB412400102_.jpg"
        alt="Home Image"
      />
      <div className="bannerTodaysdeals">
        <span className="bannerTodaysdeals__heading">Today's Deals</span>
        <span className="bannerTodaysdeals__text">
          Great Savings. Every Day. Shop from our Deal of the Day, Lightning
          Deals and avail other great offers..
        </span>
      </div>

      {/* Product id, title, price, rating, image  */}

      <div className="Todaysdeals_row">
        <Product
          id="11"
          title="pTron Bassbuds in-Ear True Wireless Bluetooth 5.0 Headphones with Hi-Fi Deep Bass, 20Hrs Playtime with Case, Ergonomic Sweatproof Earbuds, Noise Isolation, Voice Assistance & Built-in Mic - (Black)"
          price={899.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/41ImsZy3u5L._AC_SR400,600_.jpg"
        />
        <Product
          id="12"
          title="Ambrane 10000mAh Li-Polymer Powerbank with Compact Size & Fast Charging for Smartphones, Smart Watches, Neckbands & Other Devices (Capsule 10K, Black)"
          price={649.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/41DbBrME+BL._AC_SR400,600_.jpg"
        />
        <Product
          id="13"
          title="pTron Bassbuds Lite V2 In-Ear True Wireless Bluetooth 5.0 Headphones with HiFi Deep Bass, Total 20Hrs Playtime, Ergonomic Sweatproof Earbuds, Noise Isolation, Voice Assistance & Built-in Mic - (Black)"
          price={199.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/31B9gqkqxmL._AC_SR400,600_.jpg"
        />
      </div>

      <div className="Todaysdeals_row">
        <Product
          id="14"
          title="Samsung Original EP-TA20IWECGIN Type C Fast Charger (White)"
          price={446.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/31Ld48Fwm4L._AC_SR400,600_.jpg"
        />
        <Product
          id="15"
          title="TIMEWEAR Analogue - Digital Men's Watch (Black Dial)"
          price={659.91}
          rating={3}
          image="https://m.media-amazon.com/images/I/51M5gy5yXaL._AC_SR400,600_.jpg"
        />

        <Product
          id="16"
          title="TIMEWEAR Analogue Men's Watch (Black Dial)"
          price={369.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/41lyRB2ZY7L._AC_SR400,600_.jpg"
        />
      </div>

      <div className="Todaysdeals_row">
        <Product
          id="17"
          title="Amazon Brand - House & Shields Men Hooded Sweatshirt"
          price={529.8}
          rating={4}
          image="https://m.media-amazon.com/images/I/4132bnpDCOL._AC_SR400,600_.jpg"
        />
      </div>

      <div className="Todaysdeals_row">
        <Product
          id="18"
          title="
          KILLER FASH Mens Jeans Slim"
          price={1254.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41WrlYfXM4L._AC_SR400,600_.jpg"
        />

        <Product
          id="19"
          title="Wrangler Men's Skinny Fit Jeans"
          price={1030.5}
          rating={5}
          image="https://m.media-amazon.com/images/I/41yJeX6qQwL._AC_SR400,600_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Todaysdeals;
