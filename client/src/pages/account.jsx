import { Link } from "react-router-dom";
import "../styles/account.scss";

function Account() {
    return (
        <div className="account-page">
            <div className="account-page-container">
                <div className="account-page-wrapper">
                    <h1 className="account-heading">my account</h1>
                    <Link to="/" className="logout">
                        logout
                    </Link>
                    <div className="account-content">
                        <div className="account-content_order-list">
                            <span>You haven't placed orders yet.</span>
                        </div>
                        <div className="account-content_default-address">
                            <h3 className="info-name">trang nguyen</h3>
                            <div className="default-address">
                                <p className="info-email">
                                    abc001203t@gmail.com
                                </p>
                                <p className="info-address">hanoi, viet nam</p>
                                <p className="info-city-state">
                                    new york, al 1001
                                </p>
                                <p className="info-country">united states</p>
                                <p className="info-phone">0969431892</p>
                            </div>
                            <div className="link-to-addresses">
                                <Link to="/account/addresses">
                                    vew addresses
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
