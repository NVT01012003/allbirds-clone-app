import "../styles/home.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryCard from "../components/categoryCard";
import CollectionCard from "../components/collectionCard";

const calculatePosition = () => {
    return {
        1: (window.innerWidth - 10) / 2 - 175.53 / 2 - 72 - 188.49 - 24,
        2: (window.innerWidth - 10) / 2 - 175.53 / 2 - 24,
        3: (window.innerWidth - 10) / 2 + 175.53 / 2 + 72 - 24,
    };
};

const calculateCarouselWidth = (size) => {
    const windowSize =
        window.innerWidth - 16 < 1332 + 24 ? window.innerWidth - 16 : 1332 + 48;
    return {
        width: ((windowSize - 72 * 2 - 24 * 2) / 3) * 10 + 9 * 24,
        size: "large",
    };
};

function Home() {
    const collectionWidths = {
        large: {
            1: 188.49,
            2: 175.53,
            3: 180,
        },
    };

    const [sliderPosition, setSliderPosition] = useState({
        position: calculatePosition(),
        width: collectionWidths.large,
        item: 1,
        size: "large",
    });
    const [carouselWidth, setCarouselWidth] = useState({
        ...calculateCarouselWidth(),
    });

    const handleResize = () => {
        setSliderPosition((pre) => ({
            ...pre,
            position: calculatePosition(),
        }));
        setCarouselWidth((pre) => ({ ...calculateCarouselWidth() }));
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="home-container">
            <div className="home-page">
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
                                    onClick={() =>
                                        setSliderPosition((pre) => ({
                                            ...pre,
                                            item: 1,
                                        }))
                                    }
                                    className={
                                        sliderPosition.item === 1
                                            ? "active"
                                            : ""
                                    }
                                >
                                    for everyday
                                </h2>
                                <h2
                                    onClick={() =>
                                        setSliderPosition((pre) => ({
                                            ...pre,
                                            item: 2,
                                        }))
                                    }
                                    className={
                                        sliderPosition.item === 2
                                            ? "active"
                                            : ""
                                    }
                                >
                                    for activity
                                </h2>
                                <h2
                                    onClick={() =>
                                        setSliderPosition((pre) => ({
                                            ...pre,
                                            item: 3,
                                        }))
                                    }
                                    className={
                                        sliderPosition.item === 3
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
                                            sliderPosition.width[
                                                sliderPosition.item
                                            ]
                                        }px`,
                                        transform: `translateX(${
                                            sliderPosition.position[
                                                `${sliderPosition.item}`
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
                                        <div
                                            className="card-carousel"
                                            style={{
                                                width: `${carouselWidth.width}px`,
                                            }}
                                        >
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                        </div>
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
                                        <div
                                            className="card-carousel"
                                            style={{
                                                width: `${carouselWidth.width}px`,
                                            }}
                                        >
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                        </div>
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
                                        <div
                                            className="card-carousel"
                                            style={{
                                                width: `${carouselWidth.width}px`,
                                            }}
                                        >
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                            <div className="card-carousel-item">
                                                <CollectionCard />
                                            </div>
                                        </div>
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
                </div>
            </div>
        </div>
    );
}

export default Home;
