import { useAppContext } from '~/context/AppContext';
import {twMerge} from "tailwind-merge";

const Footer = () => {
    const { isLoading } = useAppContext();

    return (
        <footer className={twMerge('relative opacity-0 transition-opacity duration-500 pt-60 lg:pt-80 pb-5', !isLoading && 'opacity-100')}>
            <div className="flex items-center justify-center gap-1 text-sm md:text-md font-normal">
                Made by
                <div className="flex items-center gap-1">
                    <img className="w-8" src="/he.webp" alt="He" />
                    Vladyslav Dudkin
                </div>
                for
                <div className="flex items-center gap-1">
                    <img className="w-8" src="/she.webp" alt="She" />
                    Zulfia Khamaieva
                </div>
            </div>
        </footer>
    );
};

export default Footer;
