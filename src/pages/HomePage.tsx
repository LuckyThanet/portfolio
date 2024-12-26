import React from 'react';
import imgthanet from '../assets/thanet.jpg';
// import Contact from '../components/contact';
// import ProjectCard from '../components/projectCard';
// import Timeline from '../components/timeline';
const Contact = React.lazy(() => import('../components/contact'));
const ProjectCard = React.lazy(() => import('../components/projectCard'));
const Timeline = React.lazy(() => import('../components/timeline'));

import { motion } from 'framer-motion';
import { project, InfoProject } from '../interface/global.types';
import { MailOutlined } from '@ant-design/icons';

const Skeleton = () => (
    <div className="space-y-4">
        <div className="w-full h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-1/2 h-6 bg-gray-200 rounded animate-pulse"></div>
    </div>
);


const HomePage: React.FC = () => {

    return (
        <div className="bg-white text-black">
            <React.Suspense fallback={<Skeleton />}>
                {/* Hero Section */}
                <motion.section
                    id="home"
                    className="flex flex-col items-center justify-center h-screen text-center p-5"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.img
                        src={imgthanet}
                        alt="Your Profile"
                        className="w-32 h-32 sm:w-64 sm:h-64 rounded-full mb-5 border-4 border-gray-800"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    />
                    <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-900">Hi, I'm Thanet Jomphool</h1>
                    <p className="text-xl mb-5 text-gray-700">Web Developer</p>
                </motion.section>

                {/* About Section */}
                <motion.section
                    id="profile"
                    className="py-20 px-5 bg-gray-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-5xl mx-auto text-center text-black">
                        <h2 className="text-4xl font-extrabold mb-8">About Me</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                            <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Objective</h3>
                                <p className="text-base text-gray-600">
                                    To enhance knowledge in web design and development in depth, including utilizing various tools and frameworks such as React, Node.js, and working with databases to build functional and efficient websites.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Education</h3>
                                <p className="text-base text-gray-600">Currently pursuing a Bachelor's degree in Computer Engineering at King Mongkut's University of Technology Thonburi | KMUTT.</p>
                            </div>
                            <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
                                <ul className="list-disc list-inside text-base text-gray-600">
                                    <div><strong>Programming Languages</strong> <br />TypeScript, JavaScript, C, SQL, NoSQL</div>
                                    <div><strong>Frameworks and Libraries</strong> <br />React, Next.js, Express.js, Tailwind CSS, Node.js</div>
                                    <div><strong>Other Tools</strong> <br />Power Apps, Figma, Canva, Linux, Git, GitHub, MongoDB</div>
                                </ul>
                            </div>
                            <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Interest</h3>
                                <p className="text-base text-gray-600">
                                    I am passionate about web development and constantly exploring new programming languages and frameworks to enhance my skills. I enjoy tackling complex problems and finding efficient solutions through technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id="experiences"
                    className="py-20 px-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Experiences</h2>
                        <div className="flex justify-center">
                            <Timeline />
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id="projects"
                    className="py-20 px-5 bg-gray-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Featured Projects</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {project.map((proj: InfoProject) => (
                                <ProjectCard
                                    key={proj.title}
                                    {...proj}
                                />
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id="contact"
                    className="py-20 px-5 bg-gray-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-lg text-gray-700 mb-5">Feel free to reach out to me for collaborations or inquiries!</p>
                        <p className="text-xl font-bold text-gray-900 mb-5">
                            <MailOutlined className="mr-2" />
                            thanet.jomp@gmail.com
                        </p>
                    </div>
                    <Contact />
                </motion.section>
            </React.Suspense>
        </div>
    );
};

export default HomePage;
