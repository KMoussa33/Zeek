"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNavLink = ({ href, children }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-purple-400 p-2 rounded block text-sm ${
        active ? "text-green-400 font-semibold" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};

export default DashboardNavLink;
