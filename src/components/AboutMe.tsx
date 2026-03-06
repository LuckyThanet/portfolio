import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

export default function AboutMe() {
    return (
        <motion.section
            id="profile"
            className="py-20 px-5 bg-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
        >
            <div className="max-w-5xl mx-auto text-center text-black">
                <h2 className="text-3xl font-semibold mb-8">About Me</h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left"
                >
                    {/* Objective */}
                    {/* <motion.div
                        variants={cardVariants}
                        className="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Objective</h3>
                        <p className="text-base text-gray-600">
                            To enhance knowledge in web design and development in depth, including utilizing various tools and frameworks such as React, Node.js, and working with databases to build functional and efficient websites.
                        </p>
                    </motion.div> */}

                    {/* Education */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Education</h3>
                        <p className="text-base text-gray-600">
                            Currently pursuing a Bachelor's degree in Computer Engineering at King Mongkut's University of Technology Thonburi | KMUTT.
                        </p>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
                        <div className="space-y-3 text-base text-gray-600">
                            <div>
                                <p className="font-semibold text-gray-700 mb-1">Programming Languages</p>
                                <div className="flex flex-wrap gap-2">
                                    {['TypeScript', 'JavaScript', 'C', 'Go', 'SQL', 'NoSQL'].map((s) => (
                                        <span key={s} className="px-2 py-0.5 bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700 mb-1">Frameworks & Libraries</p>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Next.js', 'Express.js', 'Tailwind CSS', 'Node.js'].map((s) => (
                                        <span key={s} className="px-2 py-0.5 bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700 mb-1">Other Tools</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Power Apps', 'Figma', 'Canva', 'Linux', 'Git', 'GitHub', 'MongoDB' , 'Docker'].map((s) => (
                                        <span key={s} className="px-2 py-0.5 bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interest */}
                    {/* <motion.div
                        variants={cardVariants}
                        className="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Interest</h3>
                        <p className="text-base text-gray-600">
                            I am passionate about web development and constantly exploring new programming languages and frameworks to enhance my skills. I enjoy tackling complex problems and finding efficient solutions through technology.
                        </p>
                    </motion.div> */}
                </motion.div>
            </div>
        </motion.section>
    );
}
