import React from "react";
import Footer from "./Footer";

function About() {
  return (
    // a little story about MobileInsight
    <div style={{backgroundColor:'#f8f9fa'}}> 
    {/* Link to home page */}
      <a type="button" href="/" className="btn  btn-lg">MobileInsight</a>
      <p  id="About" className="m-a p-3">
        Welcome to MobileInsight, your premier destination for the latest
        advancements in mobile technology. We are passionate about bringing you
        the best smartphones on the market, offering a diverse selection from
        top brands such as Apple, Samsung, Google, and more. Our mission is to
        empower our customers by providing access to the most innovative and
        reliable mobile devices, ensuring you stay connected, informed, and
        ahead of the curve. At MobileInsight, we believe in more than just
        selling phones—we’re committed to delivering an exceptional customer
        experience. Our knowledgeable team is dedicated to helping you find the
        perfect device that suits your lifestyle and needs. Whether you're a
        tech enthusiast seeking the latest flagship model or someone looking for
        a dependable, budget-friendly option, we've got you covered. We pride
        ourselves on our transparent and hassle-free shopping experience. From
        the moment you land on our website, we aim to make your journey
        enjoyable and straightforward. With MobileInsight, you can explore,
        compare, and purchase the most advanced mobile phones with confidence,
        knowing that our commitment to quality and customer satisfaction is at
        the heart of everything we do.
      </p>

      <Footer/>
    </div>
  );
}

export default About;
