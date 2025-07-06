import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Route } from "./+types/home";
import { useAppContext } from '~/context/AppContext';
import Menu from '~/components/Menu';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "What is Love | Lounge bar" },
    { name: "description", content: "Welcome to What Is Love | Lounge Bar" },
  ];
}

export default function Home() {
    const { isLoading, handleChangeLoading } = useAppContext();

    useEffect(() => {
        const timerId = setTimeout(() => {
            handleChangeLoading(false);
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [handleChangeLoading]);

  return (
      <div>
          {!isLoading && (
              <motion.div
                  className="h-[100dvh] flex flex-col items-center justify-center text-center font-bold"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                  <motion.h1
                      className="text-[18vh] md:text-[19vw] leading-tight lg:text-[12vw]"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                  >
                      What Is Love
                  </motion.h1>
                  <motion.h2
                      className="w-full max-w-[200px] pt-5 mt-5 font-normal border-t border-white text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                  >
                      Lounge Bar
                  </motion.h2>
              </motion.div>
          )}
          <Menu />
      </div>
  );
}
