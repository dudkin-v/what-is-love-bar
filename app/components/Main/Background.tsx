import { useRef, useEffect } from 'react';

const Background = () => {
    const backgroundRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const setPosition = (x: number, y: number) => {
            if (backgroundRef.current) {
                backgroundRef.current.style.transform = `
                    perspective(1500px)
                    rotateX(${x}deg)
                    rotateY(${y}deg)
                    scale3d(1, 1, 1)
                `;
            }
        };

        const getPosition = (x: number, y: number) => {
            const position = {
                x: 0,
                y: 0,
            };

            if (backgroundRef.current) {
                position.x = (x / window.innerWidth - 0.5) * 2 * 15;
                position.y = (y / window.innerHeight - 0.5) * 2 * 15;
            }

            return position;
        };

        const handleMouseMove = (event: MouseEvent) => {
            const position = getPosition(event.clientX, event.clientY);
            setPosition(position.y, position.x);
        };

        const handleTouchMove = (event: TouchEvent) => {
            const position = getPosition(event.touches[0].clientX, event.touches[0].clientY);
            setPosition(position.y, position.x);
        };

        const handleMouseOut = () => {
            setPosition(0, 0);
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
        <>
            <div className="fixed top-0 left-0 size-full bg-[url(/noise.webp)] bg-center" />
            <div
                className="fixed top-0 left-0 size-full flex items-center justify-center p-8 md:p-[60px] transition-transform ease-out will-change-transform"
                ref={backgroundRef}
            >
                <img
                    className="max-md:w-[85%] md:h-full max-h-[600px]"
                    src="/heart.png"
                    alt="Heart"
                />
            </div>
        </>
    );
};

export default Background;
