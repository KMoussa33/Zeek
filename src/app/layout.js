import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="flex flex-col mx-auto ">
        <div className="flex-grow">
          <Header />
          <main className="my-0 ">{children}</main>
        </div>
        <Footer />
      </div>
    </html>
  );
}
