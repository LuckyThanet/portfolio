import React, { useState } from 'react';
import Modal from './modal';
import { InfoProject } from '../interface/global.types'
import { motion } from 'framer-motion';

const ProjectCard: React.FC<InfoProject> = ({
    title,
    description,
    summary,
    date,
    status,
    technologies,
    sourceCode,
    // view,
    imageUrl,
}) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-2">{summary}</p>
                <div className="flex flex-col gap-2 justify-between items-center mt-3 text-sm text-gray-500">
                    <span>{date}</span>
                    <span className={`px-3 py-1 rounded-full ${status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                        {status}
                    </span>
                </div>
                <button
                    className="mt-3 bg-gray-800 text-white px-4 py-2 rounded-full text-base hover:bg-gray-700 transition duration-300"
                    onClick={() => setModalOpen(true)}
                >
                    View Project
                </button>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                title={title}
            >

                {imageUrl && imageUrl.length > 0 && (
                    <div className="overflow-hidden w-full">
                        <motion.div
                            className="flex gap-4"
                            animate={{
                                x: ["0%", "-100%"],  // เลื่อนไปซ้ายจาก 0% ไป -100%
                            }}
                            transition={{
                                ease: "linear",
                                duration: 20,  // ระยะเวลาในการเลื่อน
                                repeat: Infinity,  // ทำให้เลื่อนไปเรื่อยๆ
                                repeatType: "loop",  // วนลูปภาพ
                            }}
                        >
                            {/* ใช้ concat เพื่อเพิ่มภาพซ้ำ */}
                            {imageUrl.concat(imageUrl).map((url, index) => (
                                <motion.img
                                    key={index}
                                    src={url}
                                    alt={`${title} ${index + 1}`}
                                    className="w-full h-[100px] sm:h-[200px] object-cover rounded-lg shadow-md"
                                />
                            ))}
                        </motion.div>
                    </div>
                )}

                {/* <p>{description}</p> */}
                <div className='mt-5'>
                    {/* Description */}
                    <div className='text-sm text-gray-600'>
                        {description.map((desc, index) => (
                            <div key={index} className=''>{desc}</div>
                        ))}
                    </div>

                    {/* Technologies */}
                    <div className="mt-2 text-sm text-gray-700">
                        <span className="font-semibold">Technologies:</span> {technologies.join(', ')}
                    </div>

                    {/* Status and Due Date */}
                    <div className=" mt-2 text-sm text-gray-700">
                        {/* Source Code Link */}
                        <a
                            href={sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Source Code{' '}
                        </a>
                        Status: <span className="font-semibold text-[#34C759]">{status}{' '}</span>
                        | Due Date: <span className="text-gray-500">{date}</span>
                    </div>

                    {/* Status and Due Date */}
                </div>
            </Modal>
        </>
    );
};

export default ProjectCard;
