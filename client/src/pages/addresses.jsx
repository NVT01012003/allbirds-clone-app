import { Link } from "react-router-dom";
import "../styles/account.scss";

function Addresses() {
    return (
        <div className="addresses">
            <div className="addresses-container">
                <h1 className="addresses-heading">my addresses</h1>
                <Link className="addresses-add-new">add new address</Link>
                <div className="add-new_form">
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input add-default">
                        <input type="checkbox" id="add-default" />
                        <label htmlFor="add-default">
                            set as default address
                        </label>
                    </div>
                    <button className="btn-deafault">add address</button>
                    <span>cancel</span>
                </div>
                <div className="address-card">
                    <h3 className="info-name">trang nguyen</h3>
                    <p className="info-email">abc001203t@gmail.com</p>
                    <p className="info-address">hanoi, viet nam</p>
                    <p className="info-city-state">new york, al 1001</p>
                    <p className="info-country">united states</p>
                    <p className="info-phone">0969431892</p>
                    <div className="btn-edit-delete">
                        <span>edit</span>
                        <span> | </span>
                        <span>delete</span>
                    </div>
                </div>
                <div className="update_form">
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input">
                        <label>first name</label>
                        <input type="text" />
                    </div>
                    <div className="form-input add-default">
                        <input type="checkbox" id="add-default" />
                        <label htmlFor="add-default">
                            set as default address
                        </label>
                    </div>
                    <button className="btn-deafault">update address</button>
                    <span>cancel</span>
                </div>
                <div className="link-back-to-account">
                    <Link to="/account">back to account</Link>
                </div>
            </div>
        </div>
    );
}

export default Addresses;
