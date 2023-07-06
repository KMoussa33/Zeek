import React from "react";
import Image from "next/image";
import FF from "../../public/images/FF.jpg";
import GoW from "../../public/images/gow_ragnarok.webp";
import Pikmin from "../../public/images/pikmin4.jpg";
import Pokemon from "../../public/images/PokemonScarlet.jpg";
import SF6 from "../../public/images/SF6.webp";
import SonicOP from "../../public/images/SonicOP.jpg";
import Twilight from "../../public/images/Zelda_TOK.jpg";

export default function Home() {
  return (
    <div className="bg-white container mx-auto p-2">
      <div
        className="flex mx-auto my-3 bg-gray-200 rounded shadow-inner sm:w-full md:w-3/4 lg:w-1/2 xl:w-2/5 2xl:w-1/3"
        style={{ height: "auto" }}
      >
        <div className="mx-auto">
          <h1 className="text-center">Featured</h1>
          {/* Below will be where the featured games section populates */}
          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            <div>
              <Image
                src={FF}
                width={175}
                height={175}
                alt="Picture of new Final Fantasy"
              />
            </div>
            <div>
              <Image
                src={GoW}
                width={170}
                height={170}
                alt="Picture of new God of War"
              />
            </div>
            <div>
              <Image
                src={SF6}
                width={170}
                height={170}
                alt="Picture of Street Fighter 6 Cover"
              />
            </div>
            <div>
              <Image
                src={SonicOP}
                width={180}
                height={180}
                alt="Picture of Sonic Cover"
              />
            </div>

            <div>
              <Image
                src={Pikmin}
                width={140}
                height={140}
                alt="Picture of new Pikmin Game"
              />
            </div>
            <div>
              <Image
                src={Pokemon}
                width={140}
                height={140}
                alt="Picture of Pokemon Scarlet Cover"
              />
            </div>
            <div>
              <Image
                src={Twilight}
                width={140}
                height={140}
                alt="Picture of Zelda Cover"
              />
            </div>
            <div>
              <Image
                src={Pokemon}
                width={140}
                height={140}
                alt="Picture of Pokemon Scarlet Cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
