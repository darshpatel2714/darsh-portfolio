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
                    "absolute -top-6 left-1/2 -translate-x-1/2",
                    "p-3 rounded-full bg-primary text-primary-foreground",
                    "hover:scale-110 hover:shadow-lg hover:shadow-primary/30",
                    "transition-all duration-300",
                    "glow"
                )}
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <Link
                            href="#home"
                            className="text-2xl font-bold gradient-text inline-block mb-4"
                        >
                            {"<Darsh />"}
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Full Stack Developer passionate about creating modern, responsive
                            web experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}
                    <div className="text-center md:text-right">
                        <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
                        <div className="flex justify-center md:justify-end gap-3">
                            <Link
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "p-3 rounded-lg bg-muted",
                                    "hover:bg-primary hover:text-primary-foreground",
                                    "transition-all duration-300"
                                )}
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "p-3 rounded-lg bg-muted",
                                    "hover:bg-primary hover:text-primary-foreground",
                                    "transition-all duration-300"
                                )}
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href={`mailto:${personalInfo.email}`}
                                className={cn(
                                    "p-3 rounded-lg bg-muted",
                                    "hover:bg-primary hover:text-primary-foreground",
                                    "transition-all duration-300"
                                )}
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground tracking-wide">
                        © {currentYear} Darsh Patel
                    </p>
                </div>
            </div>
        </footer>
    );
}
