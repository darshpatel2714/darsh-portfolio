"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-background"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            {/* Animated Gradient Orbs - hidden in dark mode */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse dark:hidden" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 dark:hidden" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto px-2">
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base tracking-wide"
                    >
                        👋 Hello, I&apos;m
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-wide"
                    >
                        <span className="gradient-text">{personalInfo.name}</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 tracking-wide px-2"
                    >
                        {personalInfo.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed tracking-wide px-2"
                    >
                        Passionate about creating modern, responsive, and visually appealing
                        web experiences using cutting-edge technologies.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                    >
                        <Link
                            href="#projects"
                            className={cn(
                                "group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base",
                                "bg-primary text-primary-foreground font-semibold",
                                "hover:scale-105 hover:shadow-lg hover:shadow-primary/30",
                                "transition-all duration-300"
                            )}
                        >
                            View My Work
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className={cn(
                                "group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base",
                                "border-2 border-primary text-primary font-semibold",
                                "hover:bg-primary hover:text-primary-foreground",
                                "hover:scale-105 transition-all duration-300"
                            )}
                        >
                            Get In Touch
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Tech Stack Preview */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2"
                    >
                        {["React", "Next.js", "Node.js", "Python", "Flutter"].map((tech, index) => (
                            <span
                                key={tech}
                                className={cn(
                                    "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium",
                                    "bg-muted/50 text-muted-foreground border border-border",
                                    "hover:border-primary hover:text-primary transition-colors"
                                )}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-sm">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowDown className="w-5 h-5" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
