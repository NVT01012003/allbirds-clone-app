import { Link } from "react-router-dom";
import "../styles/account.scss";
import { useState } from "react";

function Addresses() {
    const [addForm, setAddForm] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);

    return (
        <div className="addresses-page">
            <div className="addresses-page-container">
                <div className="addresses-page-wrapper">
                    <h1 className="addresses-heading">my addresses</h1>
                    <div className="addresses-add-new">
                        <span onClick={() => setAddForm((pre) => !pre)}>
                            add new address
                        </span>
                    </div>
                    <div
                        className="addresses-form"
                        style={{ display: (addForm && "flex") || "none" }}
                    >
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
                        <div className="cancel">
                            <span onClick={() => setAddForm(false)}>
                                cancel
                            </span>
                        </div>
                    </div>
                    <div className="addresses-wrapper">
                        <div className="default-address-card">
                            <h3 className="info-name">
                                trang nguyen (default)
                            </h3>
                            <p className="info-address">hanoi - viet nam</p>
                            <p className="info-city-state">new york, al 1001</p>
                            <p className="info-country">united states</p>
                            <p className="info-phone">0969431892</p>
                            <div className="btn-edit-delete">
                                <span
                                    onClick={() => setUpdateForm((pre) => !pre)}
                                >
                                    edit
                                </span>
                                <span> | </span>
                                <span>delete</span>
                            </div>
                        </div>
                        <div
                            className="addresses-form"
                            style={{
                                display: (updateForm && "flex") || "none",
                            }}
                        >
                            <div className="form-input">
                                <label>first name</label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label>last name</label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label>company</label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label>address1</label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label>address2</label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label>city</label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label>country</label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label>state/province</label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label>postal/zip code</label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label>phone</label>
                                <input type="text" />
                            </div>
                            <div className="form-input add-default">
                                <input type="checkbox" id="update-default" />
                                <label htmlFor="update-default">
                                    set as default address
                                </label>
                            </div>
                            <button className="btn-deafault">
                                update address
                            </button>
                            <div className="cancel">
                                <span onClick={() => setUpdateForm(false)}>
                                    cancel
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="link-back-to-account">
                        <Link to="/account">back to account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addresses;
