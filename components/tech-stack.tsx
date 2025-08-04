import { containerVariants, scrollVariants } from "@/constants/framer";
import { techStack } from "@/constants/tech-stack";
import { motion } from "framer-motion";
import Image from "next/image";

const TechStack = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-12 sm:py-16 md:py-20"
    >
      <motion.h2
        variants={scrollVariants}
        className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono mb-8 sm:mb-12 text-center px-2"
      >
        Stack
      </motion.h2>

      <motion.div
        variants={scrollVariants}
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 sm:gap-6 max-w-5xl mx-auto"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg border border-gray-600 flex items-center justify-center transition-all duration-300">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </div>
            <span className="text-xs sm:text-sm  mt-2 text-center  transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TechStack;