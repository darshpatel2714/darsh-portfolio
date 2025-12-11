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
        <section id="skills" className="py-20 lg:py-32">
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
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Technologies and tools I&apos;ve worked with throughout my journey as a developer.
                    </p>
                </motion.div>

                {/* Skills Grid by Category */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                                    "glass rounded-2xl p-6",
                                    "hover:border-primary/50 transition-all duration-300",
                                    "group"
                                )}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{category.icon}</span>
                                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
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
                                                "px-3 py-1.5 rounded-lg text-sm",
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
                    className="mt-12 text-center"
                >
                    <p className="text-muted-foreground mb-4">
                        Always learning and expanding my skill set
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["MERN Stack", "MEAN Stack", "Django", "Flutter", "TensorFlow.js"].map(
                            (stack) => (
                                <span
                                    key={stack}
                                    className={cn(
                                        "px-6 py-3 rounded-xl font-medium",
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
