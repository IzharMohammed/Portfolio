import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <Terminal className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="font-mono text-sm sm:text-lg font-bold truncate">
              mohammed@dev:~$
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
