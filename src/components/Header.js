"use client";

import Link from "next/link";
import { useState } from "react";
import "../styles/globals.css";
import SearchField from "./SearchField";
import LoginButton from "./LoginButton";
import LoginModal from "./loginModal";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className="bg-white p-4 relative">
      <div className="container mx-auto px-4 flex justify-between items-center text-base">
        <Link href="/">
          <h1 className="text-3xl font-light text-stone-700 cursor-pointer">
            ZeeK
          </h1>
        </Link>
        <LoginButton onClick={handleOpenModal} />
        {modalOpen && <LoginModal handleClose={handleCloseModal} />}
        <SearchField />
      </div>
    </nav>
  );
}
