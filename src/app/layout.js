import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="flex flex-col min-h-screen max-w-2xl px-3 pt-5 pb-10">
        <div className="flex-grow">
          <Header />
          <body className="my-0 py-10">{children}</body>
        </div>
        <Footer />
      </div>
    </html>
  );
}
