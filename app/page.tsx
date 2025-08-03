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
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <Terminal className="h-6 w-6" />
              <span className="font-mono text-lg font-bold">
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

      <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          style={{ y, opacity }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-20 md:py-32"
        >
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code className="w-16 h-16 text-primary" />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold font-mono"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Mohammed Izhar
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Full Stack Web Developer
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground max-w-3xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Crafting scalable web applications with modern technologies.
                Specialized in T3 stack, JavaScript ecosystem, and cloud-native
                solutions.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center max-w-4xl"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm py-1 px-3 cursor-pointer"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg">
                  <Link href="#projects">View Projects</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" asChild>
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
          className="py-20"
        >
          <motion.h2
            variants={scrollVariants}
            className="text-3xl md:text-4xl font-bold font-mono mb-12 text-center"
          >
            $ whoami
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
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
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="cursor-pointer"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-8 h-8 text-primary mb-2" />
                    </motion.div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
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
          className="py-20"
        >
          <motion.h2
            variants={scrollVariants}
            className="text-3xl md:text-4xl font-bold font-mono mb-12 text-center"
          >
            $ ls projects/
          </motion.h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={scrollVariants}
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 items-center`}
              >
                <motion.div
                  className="flex-1"
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
                  className="flex-1 space-y-4"
                  initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold font-mono"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground text-lg leading-relaxed"
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
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge variant="outline">{tag}</Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild>
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
                      >
                        <Button variant="outline" asChild>
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
          className="py-20"
        >
          <motion.h2
            variants={scrollVariants}
            className="text-3xl md:text-4xl font-bold font-mono mb-12 text-center"
          >
            $ contact --help
          </motion.h2>

          <motion.div
            variants={scrollVariants}
            className="text-center space-y-8"
          >
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ready to collaborate on your next project? Let's build something
              amazing together.
            </motion.p>

            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                // {
                //   href: "mailto:mohammed@example.com",
                //   icon: Mail,
                //   text: "Email Me",
                // },
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
                >
                  <Button
                    size="lg"
                    variant={index === 0 ? "default" : "outline"}
                    asChild
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <item.icon className="w-5 h-5 mr-2" />
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
        className="border-t py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <motion.p
              className="font-mono"
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
