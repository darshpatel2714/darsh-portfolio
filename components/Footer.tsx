"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-card border-t border-border">
            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={cn(
                    "absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2",
                    "p-2.5 sm:p-3 rounded-full bg-primary text-primary-foreground",
                    "hover:scale-110 hover:shadow-lg hover:shadow-primary/30",
                    "transition-all duration-300",
                    "glow"
                )}
                aria-label="Back to top"
            >
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-12 sm:pt-14 lg:pt-16 pb-6 sm:pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* Brand */}
                    <div className="text-center sm:text-left">
                        <Link
                            href="#home"
                            className="text-xl sm:text-2xl font-bold gradient-text inline-block mb-3 sm:mb-4"
                        >
                            {"<Darsh />"}
                        </Link>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                            Full Stack Developer passionate about creating modern, responsive
                            web experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Quick Links</h3>
                        <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}
                    <div className="text-center sm:col-span-2 md:col-span-1 md:text-right">
                        <h3 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Connect</h3>
                        <div className="flex justify-center md:justify-end gap-2 sm:gap-3">
                            <Link
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "p-2.5 sm:p-3 rounded-lg bg-muted",
                                    "hover:bg-primary hover:text-primary-foreground",
                                    "transition-all duration-300"
                                )}
                                aria-label="GitHub"
                            >
                                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                            <Link
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "p-2.5 sm:p-3 rounded-lg bg-muted",
                                    "hover:bg-primary hover:text-primary-foreground",
                                    "transition-all duration-300"
                                )}
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                            <Link
                                href={`mailto:${personalInfo.email}`}
                                className={cn(
                                    "p-2.5 sm:p-3 rounded-lg bg-muted",
                                    "hover:bg-primary hover:text-primary-foreground",
                                    "transition-all duration-300"
                                )}
                                aria-label="Email"
                            >
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 sm:pt-8 border-t border-border text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">
                        © {currentYear} Darsh Patel
                    </p>
                </div>
            </div>
        </footer>
    );
}
