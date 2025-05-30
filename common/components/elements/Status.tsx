import { motion } from "framer-motion";
import Link from "next/link";

const Status = () => {
  return (
    <Link href="/contact" className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-1">
      <motion.div
        className="h-2 w-2 rounded-full bg-green-400"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      <span className="text-sm font-thin text-neutral-600 dark:text-neutral-400">
        Hire me.
      </span>
    </Link>
  );
};

export default Status;
