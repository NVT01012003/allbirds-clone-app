import { useState, useRef } from "react";
import CollectionCard from "./collectionCard";
import ProductCard from "./productCard";

function Carousel({ carouselSize, carouselWidth, type }) {
    const [offsetX, setOffsetX] = useState(null);
    const [dragging, setDragging] = useState(false);

    // variable ref
    const carousel = useRef();

    // handle dragging
    const handleMouseDown = (e, carousel) => {
        setDragging(true);
        setOffsetX(e.clientX - carousel.current.getBoundingClientRect().left);
        carousel.current.style.transition = "unset";
        carousel.current.style.cursor = "grabbing";
    };
    const handleMove = (e, carousel) => {
        if (!dragging) return;
        carousel.current.style.transform = `translate3d(${
            e.clientX - offsetX - 72 - carouselSize.margin
        }px, 0px, 0px)`;
    };

    const handleMouseUp = (e, carousel) => {
        if (e.clientX - offsetX - 72 - carouselSize.margin > 0 && dragging) {
            carousel.current.style.transform = `translate3d(0px, 0px, 0px)`;
            carousel.current.style.transition = `all 200ms ease-out 0s`;
        } else if (
            e.clientX - offsetX - 72 - carouselSize.margin <
                carouselSize.size - 72 * 2 - carouselWidth.width &&
            dragging
        ) {
            carousel.current.style.transform = `translate3d(${
                carouselSize.size - 72 * 2 - carouselWidth.width
            }px, 0px, 0px)`;
            carousel.current.style.transition = `all 200ms ease-out 0s`;
        }
        setDragging(false);
        carousel.current.style.cursor = "grab";
    };
    return (
        <div
            className="card-carousel"
            style={{
                width: `${carouselWidth.width}px`,
            }}
            ref={carousel}
            onMouseDown={(e) => handleMouseDown(e, carousel)}
            onMouseMove={(e) => handleMove(e, carousel)}
            onMouseUp={(e) => handleMouseUp(e, carousel)}
            onMouseLeave={(e) => handleMouseUp(e, carousel)}
        >
            <div className="card-carousel-item">
                {(type === "popular-product" && (
                    <ProductCard type={type} />
                )) || <CollectionCard />}
            </div>
            <div className="card-carousel-item">
                {(type === "popular-product" && (
                    <ProductCard type={type} />
                )) || <CollectionCard />}
            </div>
            <div className="card-carousel-item">
                {(type === "popular-product" && (
                    <ProductCard type={type} />
                )) || <CollectionCard />}
            </div>
            <div className="card-carousel-item">
                {(type === "popular-product" && (
                    <ProductCard type={type} />
                )) || <CollectionCard />}
            </div>
            <div className="card-carousel-item">
                {(type === "popular-product" && (
                    <ProductCard type={type} />
                )) || <CollectionCard />}
            </div>
            <div className="card-carousel-item">
                {(type === "popular-product" && (
                    <ProductCard type={type} />
                )) || <CollectionCard />}
            </div>
            <div className="card-carousel-item">
                {(type === "popular-product" && (
                    <ProductCard type={type} />
                )) || <CollectionCard />}
            </div>
            <div className="card-carousel-item">
                {(type === "popular-product" && (
                    <ProductCard type={type} />
                )) || <CollectionCard />}
            </div>
            <div className="card-carousel-item">
                {(type === "popular-product" && (
                    <ProductCard type={type} />
                )) || <CollectionCard />}
            </div>
        </div>
    );
}

export default Carousel;
