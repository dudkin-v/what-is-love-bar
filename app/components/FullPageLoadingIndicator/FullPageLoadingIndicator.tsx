import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '~/context/AppContext';
import HeartIcon from '../../../assets/heart.svg';

const FullPageLoadingIndicator = () => {
    const { isLoading } = useAppContext();

    useEffect(
        () => {
            const timerId = setTimeout(() => {
                if (isLoading) {
                    window.scrollTo(0, 0);
                }
            }, 100);

            return () => {
                clearTimeout(timerId);
            };
        },
        [
            isLoading,
        ]
    );

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                    <div className="full-loading" />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.8, 1],
                        }}
                        transition={{
                            duration: 1.2,
                            ease: 'easeInOut',
                            repeat: Infinity,
                        }}
                    >
                        <HeartIcon className="text-red-600 size-20 md:size-24" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FullPageLoadingIndicator;
