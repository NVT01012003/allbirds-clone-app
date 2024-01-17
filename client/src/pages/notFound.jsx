import { useContext, useState } from "react";
import Carousel from "../components/carousel";
import "../styles/notFound.scss";
import { WindowSizeContext } from "../contexts/windowSizeContext";
import { Link } from "react-router-dom";

function NotFound() {
    const { carouselWidthLayout4, carouselSize } =
        useContext(WindowSizeContext);
    const [slider, setSlider] = useState(0);

    return (
        <div className="notfound-page">
            <div className="notfound-container">
                <div className="notfound-wrapper">
                    <h2 className="heading">Uh-Oh, Nothing To See Here!</h2>
                    <p className="notfound_subheading">
                        The page you requested doesn't exist. Let's try a
                        different direction.
                    </p>
                    <div className="notfound_btn">
                        <button className="btn-default btn-invert">
                            shop men
                        </button>
                        <button className="btn-default btn-invert">
                            shop women
                        </button>
                    </div>
                </div>
                <div className="notfound_explore-more">
                    <h2 className="heading">Explore More</h2>
                    <div className="explore-more_tabs">
                        <div className="tabs-container">
                            <div className="tabs-wrapper">
                                <div className="tabs_tab">
                                    <button
                                        onClick={() => setSlider(0)}
                                        className={0 === slider ? "active" : ""}
                                    >
                                        womens
                                    </button>
                                </div>
                                <div className="tabs_tab">
                                    <button
                                        onClick={() => setSlider(1)}
                                        className={1 === slider ? "active" : ""}
                                    >
                                        mens
                                    </button>
                                </div>
                                <span
                                    className="tabs_slider"
                                    style={{
                                        transform: `translate3d(${
                                            slider * 203
                                        }px, 0, 0)`,
                                    }}
                                ></span>
                            </div>
                        </div>
                    </div>
                    <div className="explore-more_card-container">
                        <Link to="/" className="explore_card-item-link">
                            <div className="explore_card-item">
                                <img
                                    src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/1z4Rx0CJeXXMdUzdxqtbju/85c462222fc0815293f12d9f0956a165/Womens_Explore_More_Everyday.jpg"
                                    alt="explore-item-img"
                                />
                                <p>Everyday Sneakers</p>
                            </div>
                        </Link>
                        <Link to="/" className="explore_card-item-link">
                            <div className="explore_card-item">
                                <img
                                    src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/1z4Rx0CJeXXMdUzdxqtbju/85c462222fc0815293f12d9f0956a165/Womens_Explore_More_Everyday.jpg"
                                    alt="explore-item-img"
                                />
                                <p>Everyday Sneakers</p>
                            </div>
                        </Link>
                        <Link to="/" className="explore_card-item-link">
                            <div className="explore_card-item">
                                <img
                                    src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/1z4Rx0CJeXXMdUzdxqtbju/85c462222fc0815293f12d9f0956a165/Womens_Explore_More_Everyday.jpg"
                                    alt="explore-item-img"
                                />
                                <p>Everyday Sneakers</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="notfound_popular-products">
                    <div className="popular-products_heading">
                        <h2 className="heading">Our Most Popular Products</h2>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-wrapper">
                            <div className="card-carousel-container large">
                                <div className="card-carousel-wrapper">
                                    <Carousel
                                        carouselWidth={carouselWidthLayout4}
                                        carouselSize={carouselSize}
                                        type="popular-product"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
