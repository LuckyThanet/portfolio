import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}           // เริ่มต้นที่โปร่งใส
                    animate={{ opacity: 1 }}           // เมื่อ Modal แสดงจะโปร่งใสเต็มที่
                    exit={{ opacity: 0 }}              // เมื่อ Modal ปิดจะโปร่งใส
                    transition={{ duration: 0.3 }}     // ระยะเวลาการเปลี่ยนแปลง
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-0"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}          // เริ่มต้นที่ขนาดเล็ก
                        animate={{ scale: 1 }}            // ขยายขนาดเมื่อแสดง
                        exit={{ scale: 0.9 }}             // ขนาดลดลงเมื่อปิด
                        transition={{ duration: 0.3 }}    // ระยะเวลาในการแอนิเมชัน
                        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl sm:w-[700px] relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-red-600 text-white text-center text-xl font-semibold flex items-center justify-center hover:bg-red-700 z-50"
                            aria-label="Close"
                        >
                            {/* × */}
                        </button>

                        <h2 className="text-2xl font-bold">{title}</h2>
                        <div className="mt-6 text-gray-700 leading-relaxed">{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
