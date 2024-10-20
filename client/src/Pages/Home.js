import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Navbar from "./Navbar";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  // State management
  const [pageOne, setPageOne] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5555/products")
      .then((r) => r.json())
      .then((products) => {
        setPageOne(products);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Navbar setSearch={setSearch} />
      <Header />
      <h3 className="p-3">SMART PHONES</h3>
      <PhoneCard search={search} pageOne={pageOne} />
      <p className="p-2">
        Would you like to add a device?
        <Link to={"/newphone"}>
          <em>click here</em>
        </Link>
      </p>

      <Footer />
    </div>
  );
}

export default Home;
