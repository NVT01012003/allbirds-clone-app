import { createContext, useState, useEffect } from "react";

export const WindowSizeContext = createContext();

export const WindowSizeContextProvider = ({ children }) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleResize = (e) => {
        return setWindowSize(window.innerWidth);
    };

    // effect hooks
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <WindowSizeContext.Provider value={{ windowSize }}>
            {children}
        </WindowSizeContext.Provider>
    );
};
