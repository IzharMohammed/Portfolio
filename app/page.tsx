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

const techStack = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Hono",
    icon: "https://raw.githubusercontent.com/honojs/hono/main/docs/images/hono-title-bg-removed.png",
  }, // Hono doesn't have Devicon
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    name: "Drizzle",
    icon: "https://avatars.githubusercontent.com/u/108468352?s=200&v=4",
  }, // Drizzle ORM logo
  {
    name: "Mongoose",
    icon: "https://avatars.githubusercontent.com/u/7552965?s=200&v=4",
  }, // Mongoose logo
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Langchain",
    icon: "https://avatars.githubusercontent.com/u/110760374?s=200&v=4",
  }, // LangChain logo
  {
    name: "AI agents",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  }, // Generic AI icon
];

const projects = [
  {
    title: "StoreKit",
    description:
      "A comprehensive e-commerce platform with AI-powered product creation, customizable dashboards, order management, and multi-store support. Built with cutting-edge technology for scalable online stores.",
    image: "/assets/storekit-features.png",
    liveUrl: "https://storekit.app/",
    videoUrl: null,
    tags: [
      "T3 stack",
      "Next js",
      "TRPC",
      "TypeScript",
      "Better-auth",
      "Hono",
      "AI",
      "Google Gemini",
      "E-commerce",
      "SaaS",
    ],
  },
  {
    title: "TheDeals",
    description:
      "A SaaS platform with role-based access control featuring admin and customer roles. Admins can manage products, banners, and store configurations while customers enjoy a seamless shopping experience.",
    image: "/assets/thedeals.png",
    liveUrl: "https://www.thedeals.site/",
    videoUrl: null,
    tags: [
      "T3 Stack",
      "Next js",
      "TRPC",
      "TypeScript",
      "Better-auth",
      "Role-based Auth",
      "SaaS",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const scrollVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

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
                className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl px-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Full Stack Web Developer & Freelancer
              </motion.p>
              <motion.p
                className="text-base sm:text-lg text-gray-500 max-w-3xl px-2 leading-relaxed"
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
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-400"
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
                  className="w-full sm:w-auto border-gray-400 text-gray-300 hover:bg-gray-900 hover:text-white hover:border-white"
                >
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
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
                  "Creating responsive, interactive UIs with React.js, Next.js, TypeScript. Focused on performance and user experience.",
              },
              {
                icon: Database,
                title: "DevOps & Cloud",
                description:
                  "Containerization with Docker, orchestration with Kubernetes, and building scalable cloud-native applications.",
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
                <Card className="h-full transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-3 sm:pb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2" />
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
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
                  <Card className="overflow-hidden group cursor-pointer">
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
                    className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
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
                        <Badge variant="outline" className="text-xs sm:text-sm">
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
                      <Button asChild className="w-full sm:w-auto">
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
                          className="w-full sm:w-auto"
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
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ready to collaborate on your next project? Let's build something
              amazing together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                {
                  href: "https://github.com/IzharMohammed",
                  icon: Github,
                  text: "GitHub",
                },
                {
                  href: "https://x.com/MohammedIz48960",
                  icon: X,
                  text: "Twitter",
                },
                {
                  href: "https://www.linkedin.com/in/mohammed-izhar-46b232253/",
                  icon: Linkedin,
                  text: "LinkedIn",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant={index === 0 ? "default" : "outline"}
                    asChild
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      {item.text}
                    </Link>
                  </Button>
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
