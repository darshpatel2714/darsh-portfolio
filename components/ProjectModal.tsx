"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Project {
    id: number;
    title: string;
    shortTitle: string;
    description: string;
    techStack: string[];
    category: string;
    features: string[];
    github: string;
    demo: string | null;
    images: string[];
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

    if (!project) return null;

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const handleImageError = (index: number) => {
        setImageErrors((prev) => ({ ...prev, [index]: true }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-16 xl:inset-20 z-50 overflow-hidden"
                    >
                        <div className="h-full w-full glass rounded-xl sm:rounded-2xl flex flex-col overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border">
                                <div>
                                    <h2 className="text-base sm:text-xl font-bold tracking-wide">{project.title}</h2>
                                    <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">{project.category}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-auto">
                                <div className="flex flex-col lg:grid lg:grid-cols-2 h-full">
                                    {/* Image Gallery */}
                                    <div className="relative bg-muted/30 flex items-center justify-center min-h-[200px] sm:min-h-[300px] lg:min-h-full">
                                        {project.images &&
                                            project.images.length > 0 &&
                                            project.images[currentImageIndex] &&
                                            project.images[currentImageIndex].trim() !== "" &&
                                            !imageErrors[currentImageIndex] ? (
                                            <Image
                                                src={project.images[currentImageIndex]}
                                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                                fill
                                                className="object-contain p-4"
                                                onError={() => handleImageError(currentImageIndex)}
                                            />
                                        ) : (
                                            <div className="text-center p-8">
                                                <p className="text-muted-foreground text-sm tracking-wide">
                                                    No screenshots available
                                                </p>
                                                <p className="text-xs text-muted-foreground mt-2">
                                                    Add images to: /public/images/
                                                </p>
                                            </div>
                                        )}

                                        {/* Navigation Arrows */}
                                        {project.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={handlePrevImage}
                                                    className="absolute left-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={handleNextImage}
                                                    className="absolute right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </>
                                        )}

                                        {/* Image Dots */}
                                        {project.images.length > 1 && (
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                {project.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setCurrentImageIndex(index)}
                                                        className={cn(
                                                            "w-2 h-2 rounded-full transition-colors",
                                                            index === currentImageIndex
                                                                ? "bg-primary"
                                                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                                        )}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Project Details */}
                                    <div className="p-4 sm:p-6 overflow-auto">
                                        <p className="text-muted-foreground text-xs sm:text-sm tracking-wide leading-relaxed mb-4 sm:mb-6">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mb-4 sm:mb-6">
                                            <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base tracking-wide">Tech Stack</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary tracking-wide"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="mb-6">
                                            <h3 className="font-semibold mb-3 tracking-wide">Key Features</h3>
                                            <ul className="space-y-2">
                                                {project.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground tracking-wide">
                                                        <span className="text-primary mt-1">▹</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Links */}
                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={cn(
                                                    "flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium tracking-wide",
                                                    "bg-muted hover:bg-primary hover:text-primary-foreground",
                                                    "transition-colors"
                                                )}
                                            >
                                                <Github className="w-4 h-4" />
                                                View Code
                                            </Link>
                                            {project.demo && (
                                                <Link
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={cn(
                                                        "flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium tracking-wide",
                                                        "bg-primary text-primary-foreground",
                                                        "hover:opacity-90 transition-opacity"
                                                    )}
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Live Demo
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
