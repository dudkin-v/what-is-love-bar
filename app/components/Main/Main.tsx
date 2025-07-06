import type { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { useAppContext } from '~/context/AppContext';
import Background from './Background';

const Main: FC<PropsWithChildren> = ({ children }) => {
    const { isLoading } = useAppContext();

    return (
        <main className={twMerge('opacity-0 transition-opacity duration-500', !isLoading && 'opacity-100')}>
            <Background />
            <section className="relative max-w-[1440px] px-4 md:px-8 lg:px[60px] mx-auto">
                {children}
            </section>
        </main>

    );
};

export default Main;
