import React from 'react';

interface TimelineItem {
    date: string;
    title: string;
    description: string[];
    status?: string;
}

const timelineData: TimelineItem[] = [
    {
        date: 'November 2024 - Present',
        title: 'Full Stack Developer for Learning Institute',
        description: ['Designing and developing the website for the eLearning Forum Asia 2025 conference, focusing on creating a user-friendly interface and smooth navigation for participants.',
            "Contributed to both frontend and backend development, utilizing React for the frontend and focusing on backend scalability and performance."
        ],
        status: 'In progress'
    },
    {
        date: 'September 2024 - Present',
        title: 'Full Stack Developer for Admission and Recruitment Office',
        description: ['Developing a system for managing activities in the 2B-KMUTT camp, such as attendance tracking and assignment submissions, using Next.js and SQL for database management.',
            "Currently working on optimizing the system’s performance and improving data handling efficiency."
        ],
        status: 'In progress'
    },
    {
        date: 'July 2024 - August 2024',
        title: 'Full Stack Developer for Department of Mathematics',
        description: ['Designed a classroom booking application using Power Apps, including UI development and implementing functionality with Power Fx.',
            "Utilized Excel as the database for managing bookings and data storage, ensuring efficient and scalable system operation."
        ],
        status: 'Completed'
    },
    {
        date: 'April 2024',
        title: 'Semi-Finalist | MED X Engineering Hackathon: Together Toward the Future ',
        description: ['Developed "Start-to-Finish", an innovative medical screening and emergency response system to improve healthcare accessibility in underserved communities.',
            'Designed a mobile app integrating hospital selection, real-time bed availability tracking, and emergency triage systems based on severity.'
        ],
        status: 'Completed'
    }
];

const Timeline: React.FC = () => {
    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {timelineData.map((item, index) => (
                <li key={index} className="mb-10 ms-4 text-left">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">
                        {item.date}{' | '}
                        {item.status && (
                            <span className={`text-sm p-1 px-2 rounded-full
            ${item.status === 'Completed'
                                    ? 'bg-green-200 text-green-800'
                                    : 'bg-yellow-200 text-yellow-800'}`}>
                                {item.status}
                            </span>
                        )}
                    </time>
                    <div className='flex justify-between items-center'>
                        <h3 className="text-lg font-semibold text-gray-900">
                            {item.title}
                        </h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-800">
                        {item.description.map((desc: string, index) => (
                            <li key={index}>
                                {desc}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ol>
    );
};

export default Timeline;
