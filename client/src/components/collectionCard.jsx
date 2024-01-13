import { Link } from "react-router-dom";
import "../styles/card.scss";

function CollectionCard() {
    return (
        <Link to="/">
            <div className="collection_card">
                <div className="card_image-wrapper">
                    <div className="card_image">
                        <img
                            src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000,b_rgb:f5f5f5/cms/6jF5fdwtI2UqyJ0ro5YPbW/59b31a9edcdb062e87ec2f2995896951/23Q4-WR2-Color-Refresh-Carousel-Card-1110x1110.jpg"
                            alt="category_image"
                        />
                    </div>
                </div>
                <div className="card_details">
                    <h2>New Arrivals</h2>
                    <div className="card_description">
                        <span>
                            The latest styles and limited edition colors that
                            you can only find here (while they last, that this).
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CollectionCard;
