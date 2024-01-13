import "../styles/card.scss";
import { Link } from "react-router-dom";

function ProductCard() {
    return (
        <Link to="/">
            <div className="product_card">
                <div className="product_details">
                    <div className="product_image">
                        <img
                            src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_800,b_rgb:f5f5f5/cms/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png"
                            alt="product_image"
                        />
                    </div>
                    <h5>Women's Tree Runners</h5>
                    <span>Kaikoura White (White Sole)</span>
                </div>
                <span className="product_price">$98</span>
            </div>
        </Link>
    );
}

export default ProductCard;
