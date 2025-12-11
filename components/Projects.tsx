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
            <section id="projects" className="py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-wide">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-sm tracking-wide">
                            A collection of projects I&apos;ve built using various technologies and frameworks.
                            <span className="block mt-1 text-primary">Click on any project to view screenshots!</span>
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-2 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 tracking-wide",
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => openProjectModal(project)}
                                className={cn(
                                    "group glass rounded-2xl overflow-hidden cursor-pointer",
                                    "hover:border-primary/50 transition-all duration-300",
                                    "flex flex-col"
                                )}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden">
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
                                                <span className="absolute bottom-4 left-4 px-2 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full flex items-center gap-1 tracking-wide">
                                                    <ImageIcon className="w-3 h-3" />
                                                    {project.images.length} images
                                                </span>
                                            )}
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Folder className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                    )}
                                    {/* Category Badge */}
                                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-primary/80 text-primary-foreground rounded-full tracking-wide">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors tracking-wide">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 flex-1 tracking-wide">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground tracking-wide"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <span className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground tracking-wide">
                                                +{project.techStack.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className={cn(
                                                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm tracking-wide",
                                                "bg-muted hover:bg-primary hover:text-primary-foreground",
                                                "transition-colors"
                                            )}
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </Link>
                                        {project.demo && (
                                            <Link
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className={cn(
                                                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm tracking-wide",
                                                    "bg-primary text-primary-foreground",
                                                    "hover:opacity-90 transition-opacity"
                                                )}
                                            >
                                                <ExternalLink className="w-4 h-4" />
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
                        className="text-center mt-12"
                    >
                        <Link
                            href="https://github.com/darshpatel2714"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "inline-flex items-center gap-2 px-8 py-4 rounded-xl tracking-wide",
                                "border-2 border-primary text-primary font-semibold",
                                "hover:bg-primary hover:text-primary-foreground",
                                "transition-all duration-300"
                            )}
                        >
                            <Github className="w-5 h-5" />
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
