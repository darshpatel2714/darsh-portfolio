"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import { experience, education } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Experience() {
    return (
        <section id="experience" className="py-16 sm:py-20 lg:py-32 bg-muted/30">
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
                        Experience & <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
                        My professional journey and academic background.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-semibold">Work Experience</h3>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6",
                                        "border-l-4 border-l-primary",
                                        "hover:shadow-lg hover:shadow-primary/10",
                                        "transition-all duration-300"
                                    )}
                                >
                                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                                        <div className="min-w-0">
                                            <h4 className="font-semibold text-sm sm:text-base lg:text-lg">{exp.role}</h4>
                                            <Link
                                                href={exp.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline flex items-center gap-1 text-sm sm:text-base"
                                            >
                                                {exp.company}
                                                <ExternalLink className="w-3 h-3" />
                                            </Link>
                                        </div>
                                        <span className="text-xs sm:text-sm text-muted-foreground bg-muted px-2 sm:px-3 py-1 rounded-full self-start whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span>{exp.location}</span>
                                    </div>

                                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                                        {exp.description}
                                    </p>

                                    <ul className="space-y-1.5 sm:space-y-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                                                <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                                                <span>{highlight}</span>
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
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                            <span className="text-xl sm:text-2xl">🎓</span>
                            <h3 className="text-xl sm:text-2xl font-semibold">Education</h3>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6",
                                        "border-l-4",
                                        edu.current ? "border-l-primary" : "border-l-muted-foreground/30",
                                        "hover:shadow-lg hover:shadow-primary/10",
                                        "transition-all duration-300",
                                        "relative"
                                    )}
                                >
                                    {edu.current && (
                                        <span className="absolute -top-2 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-primary text-primary-foreground rounded-full">
                                            Current
                                        </span>
                                    )}

                                    <h4 className="font-semibold text-sm sm:text-base lg:text-lg mb-1">{edu.degree}</h4>
                                    <p className="text-primary text-sm sm:text-base mb-2">{edu.institution}</p>

                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                            {edu.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                            {edu.period}
                                        </span>
                                        {edu.score && (
                                            <span className="bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium text-xs sm:text-sm">
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
