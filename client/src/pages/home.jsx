import "../styles/home.scss";
import { Link } from "react-router-dom";
import CategoryCard from "../components/categoryCard";
import Carousel from "../components/carousel";
import { useContext, useEffect, useRef, useState } from "react";
import { WindowSizeContext } from "../contexts/windowSizeContext";

// main
function Home() {
    const {
        carouselSize,
        carouselWidth,
        calculateHomeSliderPosition,
        windowSize,
    } = useContext(WindowSizeContext);

    const category1 = useRef();
    const category2 = useRef();
    const category3 = useRef();

    const [collectionsWidth, setCollectionsWidth] = useState({
        1: category1.current?.offsetWidth || 195,
        2: category2.current?.offsetWidth || 182,
        3: category3.current?.offsetWidth || 186,
    });
    const [homeSliderPosition, setHomeSliderPosition] = useState({
        position: calculateHomeSliderPosition(windowSize, collectionsWidth),
        item: 1,
    });

    useEffect(() => {
        setCollectionsWidth({
            1: category1.current?.offsetWidth || 195,
            2: category2.current?.offsetWidth || 182,
            3: category3.current?.offsetWidth || 186,
        });
        setHomeSliderPosition({
            position: calculateHomeSliderPosition(windowSize, collectionsWidth),
            item: 1,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize, category1, category2, category3]);

    return (
        <div className="home-page">
            <div className="home-container">
                <div className="home_banner">
                    <div className="banner-container">
                        <div className="home_banner-image">
                            <img
                                src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_3840/cms/k6nMsyLq0E2hk9FO4EyT6/e031a33c41a7ede3b336ba09833282ff/24Q1-Mizzle-Hero-1-Desktop-3840___1439.jpg"
                                alt="home-banner"
                            />
                        </div>
                        <div className="mini-navigation">
                            <h4>featured</h4>
                            <ul>
                                <li>
                                    <Link to="/">Women's Shoes</Link>
                                </li>
                                <li>
                                    <Link to="/">Men's Shoes</Link>
                                </li>
                                <li>
                                    <Link to="/">Kid's Shoes</Link>
                                </li>
                                <li>
                                    <Link to="/">New Arrivals</Link>
                                </li>
                                <li>
                                    <Link to="/">Shoe Finder</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="banner-content">
                            <h1>Take That, Weather</h1>
                            <p>
                                Water-repellent Mizzles are cozy inside and
                                extra grippy outside.
                            </p>
                        </div>
                        <div className="banner-btn">
                            <Link to="/">
                                <button className="btn-default">
                                    shop men
                                </button>
                            </Link>
                            <Link to="/">
                                <button className="btn-default">
                                    shop women
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home_content">
                    <div className="content_category">
                        <h1 className="heading">Our Favorites</h1>
                        <div className="category-container">
                            <div className="categories">
                                <h2
                                    ref={category1}
                                    id="category1"
                                    onClick={() =>
                                        setHomeSliderPosition((pre) => ({
                                            ...pre,
                                            item: 1,
                                        }))
                                    }
                                    className={
                                        homeSliderPosition.item === 1
                                            ? "active"
                                            : ""
                                    }
                                >
                                    for everyday
                                </h2>
                                <h2
                                    ref={category2}
                                    id="category2"
                                    onClick={() =>
                                        setHomeSliderPosition((pre) => ({
                                            ...pre,
                                            item: 2,
                                        }))
                                    }
                                    className={
                                        homeSliderPosition.item === 2
                                            ? "active"
                                            : ""
                                    }
                                >
                                    for activity
                                </h2>
                                <h2
                                    ref={category3}
                                    id="category3"
                                    onClick={() =>
                                        setHomeSliderPosition((pre) => ({
                                            ...pre,
                                            item: 3,
                                        }))
                                    }
                                    className={
                                        homeSliderPosition.item === 3
                                            ? "active"
                                            : ""
                                    }
                                >
                                    for the rain
                                </h2>
                                <span
                                    className="slider"
                                    style={{
                                        left: 0,
                                        width: `${
                                            collectionsWidth[
                                                homeSliderPosition.item
                                            ]
                                        }px`,
                                        transform: `translateX(${
                                            homeSliderPosition.position[
                                                `${homeSliderPosition.item}`
                                            ]
                                        }px)`,
                                    }}
                                ></span>
                            </div>
                            <div className="category-carousel flex-container flex_large">
                                <div className="category-carousel_item flex-item flex-item_large">
                                    <CategoryCard />
                                </div>
                                <div className="category-carousel_item flex-item flex-item_large">
                                    <CategoryCard />
                                </div>
                                <div className="category-carousel_item flex-item flex-item_large">
                                    <CategoryCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content_promo">
                        <img
                            src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1536/cms/5VhuscdO64YyCSlF3wYJvw/43fa81c7b208792a9db84ce8214424de/24Q1-Color-Flow-1-Site-Secondary_Hero-1-Desktop-3840___2346_SLICE_V2.jpg"
                            alt="promo-img"
                        />
                        <div className="promo-content">
                            <h1 className="heading">
                                The Shade of Things to Come
                            </h1>
                            <p>
                                Color us excited for new, wear-with-everything
                                nettral hues.
                            </p>
                            <div className="promo-btn">
                                <button className="btn-default btn-invert">
                                    shop men
                                </button>
                                <button className="btn-default btn-invert">
                                    shop women
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content_card-carousel">
                        <div className="carousel_heading-wrapper">
                            <h1 className="heading">New Arrivals</h1>
                        </div>
                        <div className="carousel-container">
                            <div className="carousel-wrapper">
                                <div className="card-carousel-container large">
                                    <div className="card-carousel-wrapper">
                                        <Carousel
                                            carouselSize={carouselSize}
                                            carouselWidth={carouselWidth}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content_promo">
                        <img
                            src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1792/cms/2xioNPWdST513nneDCzJSN/3b94e95d36ce86a1fbc316196b05f9a2/24Q1_Energy_Motivation_Site_Secondary_Hero_Desktop_3841___2346.jpg"
                            alt="promo-img"
                        />
                        <div className="promo-content">
                            <h1 className="heading">
                                New Year, Meet New Shoes
                            </h1>
                            <p>
                                The kind that'll give yor a running (or walking,
                                whichever) start on your wellness resolution.
                            </p>
                            <div className="promo-btn">
                                <button className="btn-default btn-invert">
                                    shop men
                                </button>
                                <button className="btn-default btn-invert">
                                    shop women
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content_card-carousel">
                        <div className="carousel_heading-wrapper">
                            <h1 className="heading">Shop The Collections</h1>
                        </div>
                        <div className="carousel-container">
                            <div className="carousel-wrapper">
                                <div className="card-carousel-container large">
                                    <div className="card-carousel-wrapper">
                                        <Carousel
                                            carouselSize={carouselSize}
                                            carouselWidth={carouselWidth}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content_promo">
                        <img
                            src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1440/cms/24QzGcRbuw1bsB1FZTH2VK/45c841f4209229e7924df02160de2536/Secondary_Homepage_Desktop_-_Sustainability.jpg"
                            alt="promo-img"
                        />
                        <div className="promo-content">
                            <h1 className="heading">
                                More Updates About Less Carbon
                            </h1>
                            <p>
                                Reducing the carbon footprint of our products is
                                at the heart of everything we do. And we’ve got
                                good news: we continue to make headway. Read
                                about our progress from 2022 in our latest
                                Flight Status report.
                            </p>
                            <div className="promo-btn">
                                <button className="btn-default btn-large btn-invert">
                                    our sustainability strategy
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content_card-carousel">
                        <div className="carousel_heading-wrapper">
                            <h1 className="heading">
                                Allbirds Sustainability Initatives
                            </h1>
                        </div>
                        <div className="carousel-container">
                            <div className="carousel-wrapper">
                                <div className="card-carousel-container large">
                                    <div className="card-carousel-wrapper">
                                        <Carousel
                                            carouselSize={carouselSize}
                                            carouselWidth={carouselWidth}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="email-signup-module">
                        <div className="email-signup-module_form">
                            <div className="form_heading">
                                <h1 className="heading">Want First Dibs?</h1>
                                <p>
                                    Join our email list and be the first to know
                                    about new limited edition products, material
                                    innovations, and lots of other fun updates.
                                </p>
                            </div>
                            <div className="form_input">
                                <div className="form_input-wrapper">
                                    <div className="email-wrapper">
                                        <input
                                            className="email"
                                            type="email"
                                            placeholder="Enter Your Email Address"
                                        />
                                        <input
                                            className="btn"
                                            value="sign up"
                                            type="submit"
                                        />
                                    </div>
                                </div>
                                <span>
                                    Note: You can opt-out at any time. See our{" "}
                                    <Link href="/">Privacy Policy</Link> and{" "}
                                    <Link href="/">Terms.</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="brand-values-module">
                        <div className="brand-values-module-container">
                            <h1 className="heading">The Allbirds Approach</h1>
                            <div className="brand-values-module_content">
                                <div className="brand-values-module_content-item">
                                    <h3>Wear-All-Day Comfort</h3>
                                    <p>
                                        Lightweight, bouncy, and wildly
                                        comfortable, Allbirds shoes make any
                                        outing feel efforties. Slip in, lace up,
                                        or slide them on and enjoy the comfy
                                        support.
                                    </p>
                                    <Link to="/">Learn More</Link>
                                </div>
                                <div className="brand-values-module_content-item">
                                    <h3>Sustainability In Every Step</h3>
                                    <p>
                                        From materials to transport, we're
                                        working to reduce our carbon footprint
                                        to near zero. Holding ourselves
                                        accountable and striving for climate
                                        goals isn't a 30-year goal—it's now.
                                    </p>
                                    <Link to="/">Learn More</Link>
                                </div>
                                <div className="brand-values-module_content-item">
                                    <h3>Materials From The Earth</h3>
                                    <p>
                                        We replace petroleum-based synthetics
                                        with natural alternatives wherever we
                                        can. Like using wool, tree fiber, and
                                        sugar cane. They’re soft, breathable,
                                        and better for the planet—win, win, win.
                                    </p>
                                    <Link to="/">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
