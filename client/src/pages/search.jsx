import "../styles/search.scss";
import ProductCard from "../components/productCard";

function Search() {
    return (
        <div className="search">
            <div className="search-container">
                <div className="search-wrapper">
                    <div className="search-heading">
                        <h1 className="heading">Search Results</h1>
                        <div className="search-input-wrapper">
                            <div className="search-input">
                                <div className="search_icon">
                                    <img
                                        src="//cdn.allbirds.com/image/upload/v1630526687/icons/search-fixed.svg"
                                        alt="seach-btn"
                                    />
                                </div>
                                <input
                                    placeholder="Enter Search Term"
                                    type="text"
                                />
                                <div className="search_close-btn">
                                    <span></span>
                                </div>
                            </div>
                            <span className="cancel">cancel</span>
                        </div>
                        <span className="status">
                            Sorry, there are no results for
                        </span>
                    </div>

                    <div className="search-products product-flex-container product-flex_large">
                        <div className="product-wrapper product-flex-item product-flex-item_large">
                            <ProductCard />
                        </div>
                        <div className="product-wrapper product-flex-item product-flex-item_large">
                            <ProductCard />
                        </div>
                        <div className="product-wrapper product-flex-item product-flex-item_large">
                            <ProductCard />
                        </div>
                        <div className="product-wrapper product-flex-item product-flex-item_large">
                            <ProductCard />
                        </div>
                        <div className="product-wrapper product-flex-item product-flex-item_large">
                            <ProductCard />
                        </div>
                        <div className="product-wrapper product-flex-item product-flex-item_large">
                            <ProductCard />
                        </div>
                        <div className="product-wrapper product-flex-item product-flex-item_large">
                            <ProductCard />
                        </div>
                        <div className="product-wrapper product-flex-item product-flex-item_large">
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
