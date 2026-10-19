import React, { type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    const { t } = useTranslation();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1100] p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain relative text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Red dot, with a finger-sized hit area around it */}
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 w-10 h-10 flex items-center justify-center rounded-full group cursor-pointer"
                            aria-label={t('common.modal.close')}
                        >
                            <span className="block w-4 h-4 rounded-full bg-red-600 group-hover:bg-red-700 transition-colors" />
                        </button>

                        <h2 className="text-xl sm:text-2xl font-bold px-8">{title}</h2>
                        <div className="mt-6 text-gray-700 leading-relaxed">{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
