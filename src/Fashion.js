import React from "react";
import Product from "./Product";
import "./Fashion.css";

function Fashion() {
  return (
    <div>
      <div className="Fashion">
        <img
          className="Fashion__image "
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/Top_Banner/Main-event-header-PC3000x770_eng.jpg"
          alt="Fashion Image"
        />

        <img
          className="Fashion__image "
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/Event_Page/CashbackstripeUnrec/Revised/Fc.jpg"
          alt="Fashion Image"
        />

        <div className="Fashion_row">
          <Product
            id="121"
            title="Amazon Brand - Symbol | Men Sweatshirt"
            price={509.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/41SlzsdEZeL._AC_SR400,600_.jpg"
          />
          <Product
            id="122"
            title="Amazon Brand - Symbol | Men Quilted Jacket"
            price={1049.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/41DKNKifhBL._AC_SR400,600_.jpg"
          />
          <Product
            id="123"
            title="Amazon Brand - House & Shields | 
            Men Hooded Sweatshirt"
            price={499.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41uHF0eNl4L._AC_SR400,600_.jpg"
          />
        </div>

        <img
          className="Fashion__image "
          src="https://m.media-amazon.com/images/G/31/img21/Eyewear/mens_section/sunglasses/Tommy._CB662149970_.jpg"
          alt="Fashion Image"
        />

        <div className="Fashion_row">
          <Product
            id="124"
            title="Redux RWS0216S Analog Blue Linear Designer Dial Men’s & Boy's Watch"
            price={308.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/5114a8X6iHL._AC_SR400,600_.jpg"
          />
          <Product
            id="125"
            title="Redux RWS0272S Analogue IPG Golden Dial Men’s & Boy's Watch "
            price={351.91}
            rating={5}
            image="https://m.media-amazon.com/images/I/41BC5qXlbaL._AC_SR400,600_.jpg"
          />

          <Product
            id="126"
            title="Redux Analogue Black Dial Men's & Boy's Watch RWS0361S"
            price={303.9}
            rating={1}
            image="https://m.media-amazon.com/images/I/51UCp8x+QnL._AC_SR400,600_.jpg"
          />
        </div>

        <img
          className="Fashion__image "
          src="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/ClearanceBanner/Clearance-Eng._CB412867827_.jpg"
          alt="Fashion Image"
        />

        <div className="Fashion_row">
          <Product
            id="127"
            title="US Polo Association Men's Aaron Leather Sneakers"
            price={2399.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81zrKBO8AgL._UX625_.jpg"
          />
        </div>

        <div className="Fashion_row">
          <Product
            id="128"
            title="FCUK Mirrored Aviator Unisex Sunglasses - (FC 7384 C1 S|60|Pink Color Lens)"
            price={2460.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/512lLd2-zCL._UX679_.jpg"
          />

          <Product
            id="129"
            title="Intellilens® Square Unisex Blue Cut Spectacles With Anti-glare for Eye Protection (Zero Power, Black)"
            price={799.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51b1GOiEAQL._UX679_.jpg"
          />
        </div>

        {/* Product */}
      </div>
    </div>
  );
}

export default Fashion;
