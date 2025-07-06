import { useRef, useEffect } from 'react';
import HeartIcon from '../../../assets/heart.svg';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const setPosition = (x: number, y: number) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${x}px`;
                cursorRef.current.style.top = `${y}px`;
            }
        };

        const handleMouseMove = (event: MouseEvent) => {
            setPosition(event.clientX, event.clientY);
        };

        const handleTouchMove = (event: TouchEvent) => {
            setPosition(event.touches[0].clientX, event.touches[0].clientY);
        };

        const handleMouseOut = () => {
            setPosition(-100, -100);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('touchend', handleMouseOut);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('touchend', handleMouseOut);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div
            className="fixed -top-10 -left-10 size-12 lg:size-8 flex items-center justify-center pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] mix-blend-difference transition"
            ref={cursorRef}
        >
            <HeartIcon className="size-full text-red-600" />
        </div>
    );
};

export default CustomCursor;
