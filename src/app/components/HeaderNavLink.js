"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNavLink = ({ href, children }) => {
  const pathName = usePathname();
  const active = href === pathName;

  return (
    <Link
      href={href}
      className={`hover:bg-purple-400 p-2 rounded block ${
        active ||
        (href.startsWith("/dashboard") && pathName.startsWith("/dashboard"))
          ? "text-green-700 font-semibold"
          : "text-purple-400"
      }`}
    >
      {children}
    </Link>
  );
};

export default HeaderNavLink;
