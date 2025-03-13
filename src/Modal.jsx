import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUsername("");
    setEmail("");
    setPhone("");
    setDob("");
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal();
    }
  };

  const handleSubmit = () => {
    if (!username) {
      alert("Please fill in the Username field.");
      return;
    }
    if (!email) {
      alert("Invalid email. Please check your email address.");
      return;
    }
    if (!phone) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if (!dob) {
      alert("Invalid date of birth.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const selectedDate = new Date(dob);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (selectedDate > currentDate) {
      alert("Invalid date of birth.");
      return;
    }

    closeModal();
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
