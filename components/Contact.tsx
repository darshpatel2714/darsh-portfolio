"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Contact() {
    return (
        <section id="contact" className="py-16 sm:py-20 lg:py-32">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4 sm:space-y-6"
                        >
                            <div className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6">Let&apos;s Connect</h3>

                                <div className="space-y-3 sm:space-y-4">
                                    <Link
                                        href={`mailto:${personalInfo.email}`}
                                        className={cn(
                                            "flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl",
                                            "bg-muted/50 hover:bg-primary/10",
                                            "transition-colors group"
                                        )}
                                    >
                                        <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                                            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                                            <p className="font-medium text-sm sm:text-base truncate">{personalInfo.email}</p>
                                        </div>
                                    </Link>

                                    <div
                                        className={cn(
                                            "flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl",
                                            "bg-muted/50"
                                        )}
                                    >
                                        <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                                            <p className="font-medium text-sm sm:text-base">{personalInfo.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6">Follow Me</h3>
                                <div className="flex gap-3 sm:gap-4">
                                    <Link
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "flex-1 flex items-center justify-center gap-2 p-3 sm:p-4 rounded-lg sm:rounded-xl",
                                            "bg-muted/50 hover:bg-primary hover:text-primary-foreground",
                                            "transition-all duration-300"
                                        )}
                                    >
                                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span className="font-medium text-sm sm:text-base">GitHub</span>
                                    </Link>
                                    <Link
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "flex-1 flex items-center justify-center gap-2 p-3 sm:p-4 rounded-lg sm:rounded-xl",
                                            "bg-muted/50 hover:bg-blue-600 hover:text-white",
                                            "transition-all duration-300"
                                        )}
                                    >
                                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span className="font-medium text-sm sm:text-base">LinkedIn</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-center"
                        >
                            <div className="text-center">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
                                    <Send className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Ready to Work Together?</h3>
                                <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                                    Whether you have a project in mind or just want to chat, feel free to reach out. I&apos;d love to hear from you!
                                </p>
                                <Link
                                    href={`mailto:${personalInfo.email}`}
                                    className={cn(
                                        "inline-flex items-center gap-2 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-lg sm:rounded-xl",
                                        "bg-primary text-primary-foreground font-semibold text-sm sm:text-base",
                                        "hover:scale-105 hover:shadow-lg hover:shadow-primary/30",
                                        "transition-all duration-300"
                                    )}
                                >
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Send an Email
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
