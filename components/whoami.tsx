import { containerVariants, scrollVariants } from "@/constants/framer";
import { motion } from "framer-motion";
import { Database, Server, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const WhoAmI = () => {
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
        $ whoami
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          {
            icon: Server,
            title: "Backend Development",
            description:
              "Expert in Node.js, Express.js, and Hono. Building robust APIs with GraphQL, managing databases with Prisma, Drizzle, and Mongoose.",
          },
          {
            icon: Smartphone,
            title: "Frontend Development",
            description:
              "Creating responsive, interactive UIs with React.js, Next.js, TypeScript. Focused on performance and user experience with T3 stack.",
          },
          {
            icon: Database,
            title: "DevOps & Cloud",
            description:
              "Containerization with Docker, building scalable cloud-native applications, and implementing modern deployment strategies.",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            variants={scrollVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="cursor-pointer"
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg  border-gray-700 hover:border-white">
              <CardHeader className="pb-3 sm:pb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8  mb-2" />
                </motion.div>
                <CardTitle className="text-lg sm:text-xl ">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhoAmI;
