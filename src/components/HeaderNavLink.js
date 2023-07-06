"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNavLink = ({ href, children }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block ${
        active ||
        (href.startsWith("/dashboard") && pathname.startsWith("/dashboard"))
          ? "text-gray-200 font-semibold"
          : "text-purple-300"
      }`}
    >
      {children}
    </Link>
  );
};

export default HeaderNavLink;
