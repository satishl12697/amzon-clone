import React from "react";
import Product from "./Product";
import "./Bestsellers.css";

function Bestsellers() {
  return (
    <div className="Bestsellers">
      <div className="banner">
        <span className="banner__heading">Amazon Bestsellers</span>
        <span className="banner__text">
          Our most popular products based on sales. Updated hourly.
        </span>
      </div>

      {/* Product id, title, price, rating, image  */}

      <div className="Bestsellers_row">
        <Product
          id="12321341"
          title="ASGARD 3 Layer Protective Face Mask with NOSE CLIP, Certified by CE, ISO & GMP with Bacterial Filtration Efficiency(BFE)≥98.5%, (Blue, BOX SEALED PACKAGING)"
          price={314.0}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/71qshn-Y67L._AC_UL200_SR200,200_.jpg"
        />
        <Product
          id="49538094"
          title="Callas Multipurpose Foldable Laptop Table with Cup Holder | Drawer | Mac Holder | Table Holder Study Table, Breakfast Table, Foldable and Portable/Ergonomic"
          price={799.0}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/61HZfQba3NL._AC_UL200_SR200,200_.jpg"
        />
        <Product
          id="23445930"
          title="
          Roll over image to zoom in
          Alpino Natural Peanut Butter Crunch 1 KG | Unsweetened | Made with 100% Roasted Peanuts | 30% Protein | No Added Sugar | No Added Salt | No Hydrogenated Oils | Non-GMO"
          price={379.99}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/71n6gXQn79L._AC_UL200_SR200,200_.jpg"
        />
      </div>

      <div className="Bestsellers_row">
        <Product
          id="4903850"
          title="The Man Company Beard Growth Oil With Almond & Thyme | Promotes Growth, Nourishment | Paraben Free & SLS Free | 30 ML"
          price={275.99}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/61D2CteQD3L._AC_UL200_SR200,200_.jpg"
        />
        <Product
          id="3254354345"
          title="Neuherbs Raw Unroasted Chia Seeds with Omega 3 and Fiber for Weight Loss - 200 Gram (Mass & Weight Gainers) "
          price={199.99}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/71GOxGPY9RL._AC_UL200_SR200,200_.jpg"
        />

        <Product
          id="3254354346"
          title="Yogabar Dark Chocolate Peanut Butter| Creamy & Chocolatey | Slow Roasted | Non-GMO Premium Peanuts | 1kg"
          price={329.99}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/81iHcPgAFlL._AC_UL200_SR200,200_.jpg"
        />
      </div>

      <div className="Bestsellers_row">
        <Product
          id="90829332"
          title="Keynote Kashmir Saffron / Kashmiri Kesar / Keshar / Vacuum Packed Glass Bottle 1 Grams"
          price={1450.98}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/810YPaKe6EL._AC_UL200_SR200,200_.jpg"
        />
      </div>

      <div className="Bestsellers_row">
        <Product
          id="90829333"
          title="
          Roll over image to zoom in
          Callas Metal Mesh Desk Organizer, Black LD 708-05"
          price={349.98}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/81f5kIpOFkL._AC_UL200_SR200,200_.jpg"
        />

        <Product
          id="90829331"
          title="The Man Company Black EDT | Long Lasting | 50 ML"
          price={499.5}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/519kpPJ1gcL._AC_UL200_SR200,200_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Bestsellers;
