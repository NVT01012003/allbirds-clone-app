import { createContext, useState, useEffect } from "react";

export const WindowSizeContext = createContext();

// function
const calculateHomeSliderPosition = (windowSize, collectionsWidth) => {
    if (windowSize <= 48 + 1236)
        return {
            1:
                (window.innerWidth - 16) / 2 -
                collectionsWidth[2] / 2 -
                72 -
                collectionsWidth[1] -
                24 +
                4,
            2: (window.innerWidth - 16) / 2 - collectionsWidth[2] / 2 - 24 + 4,
            3:
                (window.innerWidth - 16) / 2 +
                collectionsWidth[2] / 2 +
                72 -
                24 +
                4,
        };
    else
        return {
            1:
                1236 / 2 -
                collectionsWidth[2] / 2 -
                72 -
                collectionsWidth[1] +
                4,
            2: 1236 / 2 - collectionsWidth[2] / 2 + 4,
            3: 1236 / 2 + collectionsWidth[2] / 2 + 72 + 4,
        };
};

// const calculateNotFoundSliderPosition = () => {

// }

const calculateCarouselWidth = (windowSize) => {
    const carouselSize = windowSize < 1332 + 48 ? windowSize : 1332 + 48;
    return {
        width: ((carouselSize - 72 * 2 - 24 * 2) / 3) * 10 + 9 * 24,
        size: "large",
    };
};

const calculateCarouselWidthLayout4 = (windowSize) => {
    const carouselSize = windowSize < 1332 + 48 ? windowSize : 1332 + 48;
    return {
        width: ((carouselSize - 72 * 2 - 24 * 3) / 4) * 10 + 9 * 24,
        size: "large",
    };
};

const calculateCarouselSize = (windowSize) => {
    const carouselSize =
        windowSize < 1332 + 48 ? window.innerWidth - 16 : 1332 + 48;
    if (windowSize <= 1380) return { margin: 0, size: carouselSize };
    else return { margin: (windowSize - 1380 - 16) / 2, size: carouselSize };
};

export const WindowSizeContextProvider = ({ children }) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth - 16);

    // variable state
    const [carouselWidth, setCarouselWidth] = useState({
        ...calculateCarouselWidth(window.innerWidth - 16),
    });
    const [carouselWidthLayout4, setCarouselWidthLayout4] = useState({
        ...calculateCarouselWidthLayout4(window.innerWidth - 16),
    });
    const [carouselSize, setCarouselSize] = useState({
        ...calculateCarouselSize(window.innerWidth - 16),
    });

    // handle function
    const handleResize = () => {
        const windowSize = window.innerWidth - 16;
        setCarouselWidth((pre) => ({ ...calculateCarouselWidth(windowSize) }));
        setCarouselWidthLayout4((pre) => ({
            ...calculateCarouselWidthLayout4(windowSize),
        }));
        setCarouselSize((pre) => ({ ...calculateCarouselSize(windowSize) }));
        setWindowSize(windowSize);
    };

    // effect hooks
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <WindowSizeContext.Provider
            value={{
                carouselSize,
                carouselWidth,
                carouselWidthLayout4,
                calculateHomeSliderPosition,
                windowSize,
            }}
        >
            {children}
        </WindowSizeContext.Provider>
    );
};
