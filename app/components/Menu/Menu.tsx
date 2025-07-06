import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '~/context/AppContext';
import MenuList from './MenuList';
import ArrowIcon from '../../../assets/arrow.svg';

const Menu = () => {
    const { isLoading } = useAppContext();
    const markerRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isLoading) {
                    return;
                }

                if (entry.intersectionRatio >= 0.1) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (markerRef.current) {
            observer.observe(markerRef.current);
        }

        return () => {
            if (markerRef.current) {
                observer.unobserve(markerRef.current);
            }
        };
    }, [isLoading]);

    return (
        <>
            {!isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{
                        opacity: 1,
                        y: [0, -20, 0],
                        transition: {
                            y: {
                                duration: 1.2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            },
                            opacity: { duration: 0.4 },
                        },
                    }}
                    exit={{ opacity: 0, y: 40, transition: { duration: 0.4 } }}
                    className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50"
                >
                    <ArrowIcon className="w-10 h-10 text-white" />
                </motion.div>
            )}
                <div ref={markerRef}>
                    <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-3 gap-20 md:gap:10 lg:gap-20">
                        <MenuList
                            title="Starters"
                            items={[
                                {
                                    title: 'Stuffed olives',
                                    portion: '80g',
                                    note: 'Perfect with your first drink',
                                },
                                {
                                    title: 'Garlic croutons',
                                    portion: '50g',
                                    note: '100% safe for kissing',
                                },
                                {
                                    title: 'Cheese plate',
                                    portion: '150g',
                                    note: 'Pairs dangerously well with wine',
                                },
                            ]}
                        />

                        <MenuList
                            title="Mains"
                            items={[
                                {
                                    title: 'Beef Burger',
                                    portion: '300g',
                                    note: 'Juicy, bold, and unapologetically messy',
                                },
                                {
                                    title: 'Caesar Salad',
                                    portion: '250g',
                                    note: 'The emperor of all salads',
                                }
                            ]}
                        />

                        <MenuList
                            title="Drinks"
                            items={[
                                {
                                    title: 'Gin & Tonic',
                                    portion: '200ml',
                                    note: 'Crisp, classic, dangerously refreshing',
                                },
                                {
                                    title: 'Negroni',
                                    portion: '120ml',
                                    note: 'Bold, bitter, beautifully balanced',
                                },
                                {
                                    title: 'Aperol Spritz',
                                    portion: '200ml',
                                    note: 'Sunshine in a glass — with bubbles',
                                },
                                {
                                    title: 'White Wine',
                                    portion: '150ml',
                                    note: 'Chilled elegance in a glass',
                                },
                            ]}
                        />
                    </div>
                </div>
        </>
    );
};

export default Menu;
