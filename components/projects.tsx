import { containerVariants, scrollVariants } from "@/constants/framer";
import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink, Play } from "lucide-react";

const Projects = () => {
  return (
    <motion.section
      id="projects"
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
        $ ls projects/
      </motion.h2>

      <div className="space-y-12 sm:space-y-16 md:space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={scrollVariants}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`flex flex-col ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-6 sm:gap-8 items-center`}
          >
            <motion.div
              className="flex-1 w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden group cursor-pointer  border-gray-700 hover:border-white">
                <motion.div
                  className="aspect-video relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={project.image || ""}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              </Card>
            </motion.div>

            <motion.div
              className="flex-1 space-y-4 w-full px-2 sm:px-0"
              initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl font-bold font-mono"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className=" text-sm sm:text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + tagIndex * 0.1 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-xs sm:text-sm border-gray-600  "
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    asChild
                    className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black"
                  >
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </motion.div>
                {project.videoUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      asChild
                      className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-900 hover:text-white hover:border-white"
                    >
                      <Link
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;