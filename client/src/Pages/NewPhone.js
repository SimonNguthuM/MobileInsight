import React, { useState } from "react";
import Footer from "./Footer";
import "../Submit.css"

function NewPhone() {
  //useState
  const [newDevice, setNewDevice] = useState({
    name: "",
    display: "",
    memory: "",
    processor: "",
    battery: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setNewDevice({
      ...newDevice,
      [e.target.name]: e.target.value,
    });
  };

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5555/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDevice),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewDevice({
          ...newDevice,
          name: data.name,
          processor: data.processor,
          image: data.image,
          price: data.price,
        });
        window.location.reload(); /// Auto-reloads the window to refresh the form
      });
  };

  // Html elements to add new Device
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <form id="phoneForm" onSubmit={handleSubmit}>
        <p>Fill this Form to add A Device</p>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Processor</label>
          <input
            type="text"
            name="processor"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
          placeholder="Add url...."
            type="text"
            name="image"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
          placeholder="In kes...."
            type="text"
            name="price"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-info">
          Add
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default NewPhone;

