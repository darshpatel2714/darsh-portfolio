"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import { experience, education } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Experience() {
    return (
        <section id="experience" className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Experience & <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and academic background.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-semibold">Work Experience</h3>
                        </div>

                        <div className="space-y-6">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "glass rounded-2xl p-6",
                                        "border-l-4 border-l-primary",
                                        "hover:shadow-lg hover:shadow-primary/10",
                                        "transition-all duration-300"
                                    )}
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h4 className="font-semibold text-lg">{exp.role}</h4>
                                            <Link
                                                href={exp.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline flex items-center gap-1"
                                            >
                                                {exp.company}
                                                <ExternalLink className="w-3 h-3" />
                                            </Link>
                                        </div>
                                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                        <MapPin className="w-4 h-4" />
                                        {exp.location}
                                    </div>

                                    <p className="text-muted-foreground text-sm mb-4">
                                        {exp.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="text-primary mt-1">▹</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-2xl">🎓</span>
                            <h3 className="text-2xl font-semibold">Education</h3>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "glass rounded-2xl p-6",
                                        "border-l-4",
                                        edu.current ? "border-l-primary" : "border-l-muted-foreground/30",
                                        "hover:shadow-lg hover:shadow-primary/10",
                                        "transition-all duration-300",
                                        "relative"
                                    )}
                                >
                                    {edu.current && (
                                        <span className="absolute -top-2 right-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                                            Current
                                        </span>
                                    )}

                                    <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                                    <p className="text-primary mb-2">{edu.institution}</p>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {edu.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {edu.period}
                                        </span>
                                        {edu.score && (
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                                                {edu.score}
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
