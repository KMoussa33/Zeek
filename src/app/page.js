import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white p-5">
      <div
        className="flex mx-auto my-3 bg-gray-200 rounded shadow-inner"
        style={{ height: "450px", width: "800px" }}
      >
        <div className="mx-auto">
          <h1>Featured</h1>
          {/* Below will be where the featured games section populates */}
          <div className="">
            <div>
              <div>
                <Image></Image>
              </div>
              <div>
                <Image></Image>
              </div>
              <div>
                <Image></Image>
              </div>
              <div>
                <Image></Image>
              </div>
            </div>
            <div>
              <div>
                <Image></Image>
              </div>
              <div>
                <Image></Image>
              </div>
              <div>
                <Image></Image>
              </div>
              <div>
                <Image></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
