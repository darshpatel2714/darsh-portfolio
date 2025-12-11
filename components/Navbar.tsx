"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map((link) => link.href.replace("#", ""));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass py-3" : "bg-transparent py-5"
            )}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="#home"
                        onClick={() => handleLinkClick("#home")}
                        className="text-xl sm:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
                    >
                        {"<Darsh />"}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleLinkClick(link.href)}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                                    activeSection === link.href.replace("#", "")
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4 overflow-hidden"
                        >
                            <div className="glass rounded-xl p-4 space-y-2">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.name}
                                        onClick={() => handleLinkClick(link.href)}
                                        className={cn(
                                            "block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                                            activeSection === link.href.replace("#", "")
                                                ? "text-primary bg-primary/10"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        )}
                                    >
                                        {link.name}
                                    </button>
                                ))}
                                <div className="flex items-center gap-3 pt-2 border-t border-border">
                                    <Link
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span className="text-sm">GitHub</span>
                                    </Link>
                                    <Link
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                        <span className="text-sm">LinkedIn</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
