import { Link } from "react-router-dom-";
import "../styles/account.scss";

function Account() {
    return (
        <div className="account">
            <div className="account-container">
                <h1 className="account-heading">my account</h1>
                <Link to="/">logout</Link>
                <div className="account-content">
                    <div className="account-content_order-list">
                        <span>You haven't placed orders yet.</span>
                    </div>
                    <div className="account-content_info">
                        <h3 className="info-name">trang nguyen</h3>
                        <p className="info-email">abc001203t@gmail.com</p>
                        <p className="info-address">hanoi, viet nam</p>
                        <p className="info-city-state">new york, al 1001</p>
                        <p className="info-country">united states</p>
                        <p className="info-phone">0969431892</p>
                        <div className="link-to-addresses">
                            <Link to="/account/address">vew addresses</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
