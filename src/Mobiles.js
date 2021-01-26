import React from "react";
import Product from "./Product";
import "./Mobiles.css";

function Mobiles() {
  return (
    <div className="Mobiles">
      <img
        className="Mobiles__image "
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/Mseries_newlaunch/24thJan/D19805912_IN_WLME_SamsungGalaxy_M02s_New_Launch_Mobile_hero_1242x450_1._CB662221150_SY500_.jpg"
        alt="Home Image"
      />

      <div className="Mobiles_row">
        <Product
          id="111"
          title="
          OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)"
          price={42999.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/41ppKgnVLdL.jpg"
        />
        <Product
          id="112"
          title="Mi 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor"
          price={21999.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71BDjDidLoL._SX679_.jpg"
        />
        <Product
          id="113"
          title="Lava Z6 (6GB RAM, 64GB Storage)- Flame Red"
          price={9999.99}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41x-ujVJUPL._AC_SX184_.jpg"
        />
      </div>

      <div className="Mobiles_row">
        <Product
          id="114"
          title="Redmi 9 Power (Blazing Blue, 4GB RAM, 128GB Storage) - 6000mAh Battery | 48MP Quad Camera "
          price={11999.99}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/41+aHRW9EqL._AC_SX184_.jpg"
        />
        <Product
          id="115"
          title="OPPO Find X2 (Ocean, 12GB RAM, 256GB Storage) with No Cost EMI/Additional bank Offers "
          price={64990.91}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/919e-u5b4zL._SX679_.jpg"
        />

        <Product
          id="116"
          title=" Vivo V20 Pro 5G (Midnight Jazz, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={29990.9}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71N6npRR-AL._SY741_.jpg"
        />
      </div>

      <div className="Mobiles_row">
        <Product
          id="117"
          title="Samsung Galaxy Note10 Lite (Aura Glow, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={36999.8}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71T0KJFxCHL._SY741_.jpg"
        />
      </div>

      <div className="Mobiles_row">
        <Product
          id="118"
          title="Mi 10T Pro 5G (Cosmic Black, 8GB RAM, 128GB Storage) - Upto 12 Months No Cost EMI"
          price={39999.99}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/31lWqOQSn7L.jpg"
        />

        <Product
          id="119"
          title="I KALL K666 Keypad Mobile with Fast Charging (Red, 2.8 Inch, Triple Sim)"
          price={1234.5}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/413iRm8mX8L.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Mobiles;
