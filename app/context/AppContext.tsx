import { createContext, useContext, useMemo, useState, type FC, type PropsWithChildren } from 'react';

interface AppContextValue {
    isLoading: boolean;
    handleChangeLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextValue>({
    isLoading: true,
    handleChangeLoading: () => {},
});

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<AppContextValue["isLoading"]>(true);

    const contextValue: AppContextValue = useMemo(() => {
        return {
            isLoading,
            handleChangeLoading: setIsLoading,
        };
    }, [isLoading]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => useContext(AppContext);

export { useAppContext, AppContextProvider };
