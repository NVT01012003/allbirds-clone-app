import { useEffect, useState } from "react";
import Carousel from "../components/carousel";
import "../styles/notFound.scss";

const calculateCarouselWidth = (size) => {
    const carouselSize =
        window.innerWidth - 16 < 1332 + 48 ? window.innerWidth - 16 : 1332 + 48;
    return {
        width: ((carouselSize - 72 * 2 - 24 * 3) / 4) * 10 + 9 * 24,
        size: "large",
    };
};

const calculateCarouselSize = () => {
    const windowSize = window.innerWidth - 16;
    const carouselSize =
        windowSize < 1332 + 48 ? window.innerWidth - 16 : 1332 + 48;
    if (windowSize <= 1380) return { margin: 0, size: carouselSize };
    else return { margin: (windowSize - 1380 - 16) / 2, size: carouselSize };
};

function NotFound() {
    // eslint-disable-next-line no-unused-vars
    const [carouselWidth, setCarouselWidth] = useState({
        ...calculateCarouselWidth(),
    });
    // eslint-disable-next-line no-unused-vars
    const [carouselSize, setCarouselSize] = useState({
        ...calculateCarouselSize(),
    });

    // handle function
    const handleResize = () => {
        setCarouselWidth((pre) => ({ ...calculateCarouselWidth() }));
        setCarouselSize((pre) => ({ ...calculateCarouselSize() }));
    };

    // effect hooks
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="notfound">
            <div className="notfound-container">
                <div className="notfound-wrapper">
                    <h2 className="heading">Uh-Oh, Nothing To See Here!</h2>
                    <p className="notfound_subheading">
                        The page you requested doesn't exist. Let's try a
                        different direction.
                    </p>
                    <div className="notfound_btn">
                        <button>shop men</button>
                        <button>shop women</button>
                    </div>
                </div>
                <div className="notfound_explore-more">
                    <h2 className="heading">Explore More</h2>
                    <div className="explore-more_card-container">
                        <div className="explore_card-item">
                            <img
                                src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/1z4Rx0CJeXXMdUzdxqtbju/85c462222fc0815293f12d9f0956a165/Womens_Explore_More_Everyday.jpg"
                                alt="explore-item-img"
                            />
                            <p>Everyday Sneakers</p>
                        </div>
                    </div>
                </div>
                <div className="notfound_popular-products">
                    <div className="popular-products_heading">
                        <h2>Our Most Popular Products</h2>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-wrapper">
                            <div className="card-carousel-container large">
                                <div className="card-carousel-wrapper">
                                    <Carousel
                                        carouselWidth={carouselWidth}
                                        carouselSize={carouselSize}
                                        type="popular-product"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="popular-products_carousel">
                        <div className="popular-products_carousel-container">
                            <Carousel
                                carouselWidth={carouselWidth}
                                carouselSize={carouselSize}
                                type="popular-product"
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default NotFound;
