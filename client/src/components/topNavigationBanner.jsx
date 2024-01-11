import { useEffect, useState } from "react";
import RightArrow from "../assets/images/right-arrow.png";
import "../styles/commonComponent.scss";

function TopNavigationBanner({ show }) {
    const [slider, setSlider] = useState({
        slide_number: 0,
        slides: [
            "Hit Refresh in New Neutral Colors That Go With Everything. Shopmen | Shop Women",
        ],
    });
    useEffect(() => {
        console.log(show);
    }, [show]);

    return (
        <div className="navigation-banner" id={show ? "show" : "hide"}>
            <div className="slider">
                <span>{slider.slides[slider.slide_number]}</span>
                <img
                    src={RightArrow}
                    alt="right-arrow"
                    onClick={() => {
                        setSlider((pre) => {
                            if (pre.slide_number === pre.slides.length - 1) {
                                return {
                                    ...pre,
                                    slide_number: 0,
                                };
                            } else if (pre.slides.length === 1) return pre;
                            else {
                                return {
                                    ...pre,
                                    slide_number: pre.slide_number + 1,
                                };
                            }
                        });
                    }}
                />
            </div>
        </div>
    );
}

export default TopNavigationBanner;
