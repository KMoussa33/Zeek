import React, { useState } from "react";
import Nav from "./components/Nav";
import LoginModal from "./components/loginModal";

export default function RootLayout({ children }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <html lang="en">
      {/* Makes the loginModal open upon button click */}
      <Nav openModal={openModal} />
      <body>{children}</body>
      {showModal && <LoginModal closeModal={closeModal} />}
    </html>
  );
}
