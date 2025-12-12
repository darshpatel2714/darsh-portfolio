"use client";

import { motion } from "framer-motion";
import { Instagram, Palette, Sparkles } from "lucide-react";
import Link from "next/link";
import { visionaryEdits } from "@/lib/data";
import { cn } from "@/lib/utils";

export function VisionaryEdits() {
    return (
        <section className="py-16 sm:py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-wide">
                        My Creative <span className="gradient-text">Side Business</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base tracking-wide px-2">
                        Beyond development, I run a graphic design studio for all your creative needs.
                    </p>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className={cn(
                        "glass rounded-xl sm:rounded-2xl overflow-hidden",
                        "border border-primary/20 hover:border-primary/50",
                        "transition-all duration-300"
                    )}>
                        {/* Header with Gradient */}
                        <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 p-5 sm:p-6 lg:p-8 text-center">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                                <Palette className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-1 sm:mb-2 tracking-wide">
                                {visionaryEdits.name}
                            </h3>
                            <p className="text-muted-foreground tracking-wide flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base">
                                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                                <span className="px-1">{visionaryEdits.tagline}</span>
                                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            </p>
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6 lg:p-8">
                            <p className="text-muted-foreground text-center mb-6 sm:mb-8 text-xs sm:text-sm tracking-wide leading-relaxed">
                                {visionaryEdits.description}
                            </p>

                            {/* Services Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
                                {visionaryEdits.services.map((service, index) => (
                                    <motion.div
                                        key={service}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className={cn(
                                            "p-2 sm:p-3 rounded-lg text-center text-xs sm:text-sm tracking-wide",
                                            "bg-muted/50 text-muted-foreground",
                                            "hover:bg-primary hover:text-primary-foreground",
                                            "transition-all duration-300 cursor-default"
                                        )}
                                    >
                                        {service}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Instagram CTA */}
                            <div className="text-center">
                                <Link
                                    href={visionaryEdits.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-lg sm:rounded-xl",
                                        "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
                                        "text-white font-semibold tracking-wide text-sm sm:text-base",
                                        "hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30",
                                        "transition-all duration-300"
                                    )}
                                >
                                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Follow on Instagram
                                </Link>
                                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground tracking-wide">
                                    @visionary.edits.27
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
