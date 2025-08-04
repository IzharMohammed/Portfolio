import { containerVariants, scrollVariants } from "@/constants/framer";
import { motion } from "framer-motion";

const About = () => {
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
        About
      </motion.h2>

      <motion.div
        variants={scrollVariants}
        className="max-w-4xl mx-auto text-center space-y-6 px-4"
      >
        <p className="text-base sm:text-lg  leading-relaxed">
          Hello, World! I am Mohammed Izhar – a Full Stack Web Developer
        </p>
        <p className="text-base sm:text-lg  leading-relaxed">
          With expertise in the T3 stack, I specialize in building high-quality
          saas applications using Next.js, TypeScript, and modern development
          technologies. As a freelancer, I love exploring new technologies and
          turning ideas into reality through personal and client projects.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          Beyond frontend development, I have strong knowledge in DevOps
          concepts including Docker containerization, which helps me build and
          deploy scalable, cloud-native solutions.
        </p>
        <p className="text-base sm:text-lg font-medium">
          Let's connect and collaborate!
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
