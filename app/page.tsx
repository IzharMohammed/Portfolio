"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  Github,
  ExternalLink,
  Play,
  Mail,
  Linkedin,
  Terminal,
  Code,
  Database,
  Server,
  Smartphone,
  X,
  MapPin,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useRef } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import ExperienceSection from "@/components/experience";
import {
  containerVariants,
  itemVariants,
  scrollVariants,
} from "@/constants/framer";
import TechStack from "@/components/tech-stack";
import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";

const skills = [
  "JavaScript",
  "TypeScript",
  "React JS",
  "Next JS",
  "Node JS",
  "Express JS",
  "Hono",
  "Docker",
  "GraphQL",
  "Prisma",
  "Drizzle",
  "Mongoose",
  "Python",
  "Langchain",
  "Ai agents",
];

export default function Portfolio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      <main className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.section
          style={{ y, opacity }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-12 sm:py-16 md:py-20 lg:py-32"
        >
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-600"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Replace this div with your actual image */}
                <Image
                  src="/assets/izhar.jpeg" // Replace with your actual image path
                  alt="Mohammed Izhar"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  // Fallback if image doesn't load
                  // onError={(e) => {
                  //   e.currentTarget.style.display = "none";
                  //   e.currentTarget.nextElementSibling!.style.display = "flex";
                  // }}
                />
                {/* Fallback content */}
                <div
                  className="w-full h-full bg-gray-800 flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <Code className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-3 sm:space-y-4"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono px-2"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Mohammed Izhar
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl max-w-2xl px-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Full Stack Web Developer & Freelancer
              </motion.p>
              <motion.p
                className="text-base sm:text-lg  max-w-3xl px-2 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Crafting scalable web applications with modern technologies.
                Specialized in T3 stack, JavaScript ecosystem, and DevOps
                solutions including Docker containerization.
              </motion.p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>kurnool, Andhra Pradesh, India</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md mx-auto px-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black border-2 border-white"
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto border-gray-400  hover:bg-gray-900 hover:text-white hover:border-white"
                >
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <About />

        {/* Tech stack section */}
        <TechStack />

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

        {/* Projects Section */}
        <Projects />

        {/* Experience section */}
        <ExperienceSection />

        {/* Contact Section */}
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
      </main>

      {/* Footer */}
      <motion.footer
        className="border-t py-6 sm:py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <motion.p
              className="font-mono text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              © 2024 Mohammed Izhar. Built with Next.js & TypeScript
            </motion.p>
          </div>
        </div> */}
      </motion.footer>
    </div>
  );
}
