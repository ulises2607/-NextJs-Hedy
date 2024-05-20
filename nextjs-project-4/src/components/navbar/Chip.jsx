import { motion } from "framer-motion";

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`relative px-3 py-2 rounded-md transition-colors duration-300 ${
        selected
          ? "text-green-950 bg-gradient-to-r from-violet-600 to-indigo-600"
          : "text-slate-300 hover:text-white hover:bg-slate-700"
      }`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default Chip;
