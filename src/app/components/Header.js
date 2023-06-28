import Link from "next/link";
import "../../styles/globals.css";

export default function Header() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto px-4 flex justify-between items-center text-base">
        <Link href="/">
          <h1 className="text-3xl font-light text-stone-700 cursor-pointer">
            ZeeK
          </h1>
        </Link>
      </div>
    </nav>
  );
}
