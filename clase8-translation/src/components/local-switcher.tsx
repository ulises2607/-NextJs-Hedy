"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

const LocalSwitcher = () => {
  const [pending, startTransition] = useTransition();

  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    const newPathname = pathname.replace(`/${locale}`, `/${selectedLanguage}`);
    startTransition(() => {
      router.push(newPathname);
    });
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change Language</p>
      <select
        value={locale}
        onChange={onSelectChange}
        className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
        disabled={pending}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </label>
  );
};

export default LocalSwitcher;
