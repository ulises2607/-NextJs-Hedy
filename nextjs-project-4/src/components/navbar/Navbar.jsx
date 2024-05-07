"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Chip from "./Chip";

const Navbar = () => {
  const tabs = ["Home", "Posts", "Search", "About"];
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="px-4 py-14 bg-slate-900 flex items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Link href={`/${tab == "Home" ? "#" : tab.toLowerCase()}`}>
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
