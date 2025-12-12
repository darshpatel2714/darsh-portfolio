"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = [
    { name: "Languages", icon: "💻" },
    { name: "Frontend", icon: "🎨" },
    { name: "Backend", icon: "⚙️" },
    { name: "Database", icon: "🗄️" },
    { name: "Mobile", icon: "📱" },
    { name: "Design", icon: "✏️" },
    { name: "Tools", icon: "🛠️" },
    { name: "Services", icon: "☁️" },
];

export function Skills() {
    const getSkillsByCategory = (category: string) => {
        return skills.filter((skill) => skill.category === category);
    };

    return (
        <section id="skills" className="py-16 sm:py-20 lg:py-32">
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
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
                        Technologies and tools I&apos;ve worked with throughout my journey as a developer.
                    </p>
                </motion.div>

                {/* Skills Grid by Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {categories.map((category, categoryIndex) => {
                        const categorySkills = getSkillsByCategory(category.name);
                        if (categorySkills.length === 0) return null;

                        return (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                className={cn(
                                    "glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6",
                                    "hover:border-primary/50 transition-all duration-300",
                                    "group"
                                )}
                            >
                                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                    <span className="text-xl sm:text-2xl">{category.icon}</span>
                                    <h3 className="font-semibold text-sm sm:text-base lg:text-lg group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {categorySkills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                            }}
                                            className={cn(
                                                "px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm",
                                                "bg-muted text-muted-foreground",
                                                "hover:bg-primary hover:text-primary-foreground",
                                                "transition-colors cursor-default"
                                            )}
                                        >
                                            {skill.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Skills Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 sm:mt-12 text-center"
                >
                    <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                        Always learning and expanding my skill set
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-2">
                        {["MERN Stack", "MEAN Stack", "Django", "Flutter", "TensorFlow.js"].map(
                            (stack) => (
                                <span
                                    key={stack}
                                    className={cn(
                                        "px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-base font-medium",
                                        "bg-primary/10 text-primary",
                                        "border border-primary/30",
                                        "hover:bg-primary hover:text-primary-foreground",
                                        "transition-all duration-300"
                                    )}
                                >
                                    {stack}
                                </span>
                            )
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
