"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

const categories = ["All", "Frontend", "Full Stack", "Mobile App", "Backend", "AI/ML"];

export function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    const handleImageError = (projectId: number) => {
        setImageErrors((prev) => ({ ...prev, [projectId]: true }));
    };

    const openProjectModal = (project: typeof projects[0]) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeProjectModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <section id="projects" className="py-16 sm:py-20 lg:py-32">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-wide">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base tracking-wide px-2">
                            A collection of projects I&apos;ve built using various technologies and frameworks.
                            <span className="block mt-1 text-primary text-xs sm:text-sm">Click on any project to view screenshots!</span>
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 px-2"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 tracking-wide",
                                    activeCategory === category
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => openProjectModal(project)}
                                className={cn(
                                    "group glass rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer",
                                    "hover:border-primary/50 transition-all duration-300",
                                    "flex flex-col"
                                )}
                            >
                                {/* Project Image */}
                                <div className="relative h-36 sm:h-40 lg:h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden">
                                    {!imageErrors[project.id] && project.images && project.images.length > 0 && project.images[0] && project.images[0].trim() !== "" ? (
                                        <>
                                            <Image
                                                src={project.images[0]}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                onError={() => handleImageError(project.id)}
                                            />
                                            {/* Image count badge */}
                                            {project.images.length > 1 && (
                                                <span className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full flex items-center gap-1 tracking-wide">
                                                    <ImageIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                                    {project.images.length} images
                                                </span>
                                            )}
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Folder className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                    )}
                                    {/* Category Badge */}
                                    <span className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-primary/80 text-primary-foreground rounded-full tracking-wide">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors tracking-wide">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 flex-1 tracking-wide line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2 mb-3 sm:mb-4">
                                        {project.techStack.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded bg-muted text-muted-foreground tracking-wide"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded bg-muted text-muted-foreground tracking-wide">
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border">
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className={cn(
                                                "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm tracking-wide",
                                                "bg-muted hover:bg-primary hover:text-primary-foreground",
                                                "transition-colors"
                                            )}
                                        >
                                            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                                            Code
                                        </Link>
                                        {project.demo && (
                                            <Link
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className={cn(
                                                    "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm tracking-wide",
                                                    "bg-primary text-primary-foreground",
                                                    "hover:opacity-90 transition-opacity"
                                                )}
                                            >
                                                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                                Demo
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All Projects Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center mt-8 sm:mt-12"
                    >
                        <Link
                            href="https://github.com/darshpatel2714"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "inline-flex items-center gap-2 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-lg sm:rounded-xl tracking-wide text-sm sm:text-base",
                                "border-2 border-primary text-primary font-semibold",
                                "hover:bg-primary hover:text-primary-foreground",
                                "transition-all duration-300"
                            )}
                        >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                            View All on GitHub
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeProjectModal}
            />
        </>
    );
}
