import "../styles/card.scss";
import { Link } from "react-router-dom";

function ProductCard({ type }) {
    return (
        (type === "popular-product" && (
            <Link to="/">
                <div className="popular-product-card">
                    <div className="popular-product_img-wrapper">
                        <img
                            src="//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_650,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5PIOvGho6fumKEdjq2M914/1"
                            alt="popular-product-img"
                        />
                    </div>
                    <div className="popular-product_info">
                        <p>Women's Wool Runners</p>
                    </div>
                </div>
            </Link>
        )) || (
            <Link to="/">
                <div className="product-card">
                    <div className="product-details">
                        <div className="product-image">
                            <img
                                src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_800,b_rgb:f5f5f5/cms/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png"
                                alt="product-img"
                            />
                        </div>
                        <h5>Women's Tree Runners</h5>
                        <span>Kaikoura White (White Sole)</span>
                    </div>
                    <span className="product-price">$98</span>
                </div>
            </Link>
        )
    );
}

export default ProductCard;
