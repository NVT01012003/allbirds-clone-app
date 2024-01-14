import "../styles/notFound.scss";

function NotFound() {
    return (
        <div className="notfound">
            <div className="notfound-container">
                <div className="notfound-wrapper">
                    <h2 className="heading">Uh-Oh, Nothing To See Here!</h2>
                    <p className="notfound-subheading">
                        The page you requested doesn't exist. Let's try a
                        different direction.
                    </p>
                    <div className="notfound-btn">
                        <button>shop men</button>
                        <button>shop women</button>
                    </div>
                </div>
                <div className="notfound-explore-more">
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
                <div className="notfound-popular-products">
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
