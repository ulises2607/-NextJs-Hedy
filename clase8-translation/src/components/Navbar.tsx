import LocalSwitcher from "./local-switcher";
import Link from "next/link";
import { useLocale } from "next-intl";

const Navbar = () => {
  const locale = useLocale();

  return (
    <nav className="bg-blue-600 shadow-md p-4 flex justify-between items-center">
      <Link href={`/${locale}`} className="text-white text-xl font-bold">
        Boost your Interviews
      </Link>
      <div className="flex space-x-4">
        <Link href={`/${locale}/react`} className="text-white">
          React List
        </Link>
        <Link href={`/${locale}/rails`} className="text-white">
          Rails List
        </Link>
      </div>
      <LocalSwitcher />
    </nav>
  );
};

export default Navbar;
