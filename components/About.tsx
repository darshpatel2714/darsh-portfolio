"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Heart } from "lucide-react";
import { personalInfo, languages, interests } from "@/lib/data";
import { cn } from "@/lib/utils";

export function About() {
    return (
        <section id="about" className="py-20 lg:py-32 bg-muted/30">
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
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Get to know more about me, my background, and what drives my passion for development.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <span className="text-2xl">👨‍💻</span> Who Am I?
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                {personalInfo.bio}
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                I love exploring new technologies and staying updated with the latest trends
                                in web development. When I&apos;m not coding, you&apos;ll find me experimenting
                                with design tools or learning something new.
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-muted-foreground">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>{personalInfo.location}</span>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-primary" />
                                Languages I Speak
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {languages.map((lang) => (
                                    <div
                                        key={lang.name}
                                        className={cn(
                                            "px-4 py-2 rounded-lg",
                                            "bg-primary/10 text-primary",
                                            "border border-primary/20"
                                        )}
                                    >
                                        <span className="font-medium">{lang.name}</span>
                                        <span className="text-muted-foreground ml-2 text-sm">({lang.level})</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Interests & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-6"
                    >
                        {/* Interests */}
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-primary" />
                                What I Love Doing
                            </h3>
                            <ul className="space-y-3">
                                {interests.map((interest, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 text-muted-foreground"
                                    >
                                        <span className="text-primary mt-1">▹</span>
                                        <span className="text-sm leading-relaxed">{interest}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                                <div className="text-3xl font-bold gradient-text mb-2">8+</div>
                                <div className="text-sm text-muted-foreground">Projects Built</div>
                            </div>
                            <div className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                                <div className="text-sm text-muted-foreground">Technologies</div>
                            </div>
                            <div className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                                <div className="text-3xl font-bold gradient-text mb-2">6+</div>
                                <div className="text-sm text-muted-foreground">Certifications</div>
                            </div>
                            <div className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                                <div className="text-3xl font-bold gradient-text mb-2">1</div>
                                <div className="text-sm text-muted-foreground">Hackathon</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
