import React, { useState } from "react";
import "../styles/newPhone.css"; 

function NewPhone() {
  const [newDevice, setNewDevice] = useState({
    name: "",
    processor: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    setNewDevice({
      ...newDevice,
      [e.target.name]: e.target.value,
    });
  };

  // Submit function
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
          name: "",
          processor: "",
          image: "",
          price: "",
        });
        alert("Device added successfully!"); 
        window.location.reload(); 
      });
  };

  return (
    <div className="new-phone-container">
      <h2>Add a New Device</h2>
      <form id="phoneForm" onSubmit={handleSubmit} className="phone-form">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
            value={newDevice.name}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Processor</label>
          <input
            type="text"
            name="processor"
            className="form-control"
            onChange={handleChange}
            value={newDevice.processor}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="image"
            className="form-control"
            onChange={handleChange}
            value={newDevice.image}
            placeholder="Add image URL..."
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Price (KES)</label>
          <input
            type="text"
            name="price"
            className="form-control"
            onChange={handleChange}
            value={newDevice.price}
            placeholder="Enter price..."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Device
        </button>
      </form>
    </div>
  );
}

export default NewPhone;
