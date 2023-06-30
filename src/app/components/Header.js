import Link from "next/link";
import "../../styles/globals.css";
import SearchField from "./SearchField";

export default function Header() {
  return (
    <nav className="bg-white p-4 relative">
      <div className="container mx-auto px-4 flex justify-between items-center text-base">
        <Link href="/">
          <h1 className="text-3xl font-light text-stone-700 cursor-pointer">
            ZeeK
          </h1>
        </Link>
        <SearchField />
      </div>
    </nav>
  );
}
