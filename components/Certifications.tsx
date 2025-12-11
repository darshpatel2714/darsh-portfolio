"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal } from "lucide-react";
import { certifications, hackathons, awards } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Certifications() {
    return (
        <section className="py-20 lg:py-32 bg-muted/30">
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
                        Achievements & <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Recognition, certifications, and hackathons that mark my learning journey.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Awards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="w-6 h-6 text-yellow-500" />
                            <h3 className="text-xl font-semibold">Awards</h3>
                        </div>
                        <div className="space-y-4">
                            {awards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "glass rounded-xl p-5",
                                        "border-l-4 border-l-yellow-500",
                                        "hover:shadow-lg transition-shadow"
                                    )}
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">{award.icon}</span>
                                        <div>
                                            <h4 className="font-medium mb-1">{award.title}</h4>
                                            <p className="text-sm text-muted-foreground mb-1">{award.issuer}</p>
                                            <p className="text-xs text-muted-foreground">{award.date}</p>
                                            <p className="text-sm text-muted-foreground mt-2">{award.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Hackathons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Medal className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-semibold">Hackathons</h3>
                        </div>
                        <div className="space-y-4">
                            {hackathons.map((hackathon, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "glass rounded-xl p-5",
                                        "border-l-4 border-l-primary",
                                        "hover:shadow-lg transition-shadow"
                                    )}
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">{hackathon.icon}</span>
                                        <div>
                                            <h4 className="font-medium mb-1">{hackathon.name}</h4>
                                            <p className="text-sm text-muted-foreground">{hackathon.organizer}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="w-6 h-6 text-green-500" />
                            <h3 className="text-xl font-semibold">Certifications</h3>
                        </div>
                        <div className="space-y-3">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "glass rounded-xl p-4",
                                        "hover:border-primary/50 transition-colors"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{cert.icon}</span>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm truncate">{cert.title}</h4>
                                            <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                                        </div>
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
