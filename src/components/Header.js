import Link from "next/link";
import HeaderNavLink from "./HeaderNavLink";
import SearchField from "./SearchField";

const menuItems = [
  { label: `Home`, url: `/` },
  { label: `Dashboard`, url: `/dashboard/account` },
  { label: `Library`, url: `/dashboard/game_lib` },
];

const Header = () => {
  return (
    <header className="flex flex-col gap-5 bg-white w-full">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <h1 className="text-gray-300 text-2xl">ZeeK</h1>
        </Link>
        <nav className="ml-8">
          <ul className="flex flex-wrap gap-x-8 text-gray-300">
            {menuItems.map(({ url, label }, index) => (
              <li key={index}>
                <HeaderNavLink href={url}>{label}</HeaderNavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="right-0 top-2">
          <SearchField />
        </div>
      </div>
    </header>
  );
};

export default Header;
