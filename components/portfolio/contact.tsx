import { containerVariants, scrollVariants } from "@/constants/framer";
import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, X } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <motion.section
      id="contact"
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
        $ contact --help
      </motion.h2>

      <motion.div
        variants={scrollVariants}
        className="text-center space-y-6 sm:space-y-8"
      >
        <motion.p
          className="text-lg sm:text-xl  max-w-2xl mx-auto px-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Ready to collaborate on your next project? Let's build something
          amazing together.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {[
            {
              href: "https://github.com/IzharMohammed",
              icon: Github,
              text: "GitHub",
              username: "IzharMohammed",
            },
            {
              href: "https://x.com/MohammedIz48960",
              icon: X,
              text: "X",
              username: "@MohammedIz48960",
            },
            {
              href: "https://www.linkedin.com/in/mohammed-izhar-46b232253/",
              icon: Linkedin,
              text: "LinkedIn",
              username: "mohammed-izhar",
            },
          ].map((item, index) => (
            <motion.div
              key={item.text}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="w-full"
            >
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg  border border-gray-700   transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5  group-hover:text-white transition-colors" />
                  <div className="text-left">
                    <div className=" font-medium">{item.text}</div>
                    <div className="text-sm ">{item.username}</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4   transition-colors" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
