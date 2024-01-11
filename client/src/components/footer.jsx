import { Link } from "react-router-dom";
import "../styles/commonComponent.scss";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer_item">
                    <label>Enter your email to stay in touch!</label>
                    <div className="email-wrapper">
                        <input className="email" type="email" />
                        <input className="btn" value="sign up" type="submit" />
                    </div>
                </div>
                <div className="footer_item">
                    <div className="footer_content">
                        <h3>help</h3>
                        <ul>
                            <li>
                                <Link to="/">1-888-963-8944</Link>
                            </li>
                            <li>
                                <Link to="/">1-814-251-9966 (Text)</Link>
                            </li>
                            <li>
                                <Link to="/">help@allbirds.com</Link>
                            </li>
                            <li>
                                <Link to="/">Returns/Exchanges</Link>
                            </li>
                            <li>
                                <Link to="/">FAQ/Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/">Afterpay</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_content">
                        <h3>shop</h3>
                        <ul>
                            <li>
                                <Link to="/">Men's Shoes</Link>
                            </li>
                            <li>
                                <Link to="/">Women's Shoes</Link>
                            </li>
                            <li>
                                <Link to="/">Men's Apparel</Link>
                            </li>
                            <li>
                                <Link to="/">Women's Apparel</Link>
                            </li>
                            <li>
                                <Link to="/">Socks</Link>
                            </li>
                            <li>
                                <Link to="/">Shoe Finder</Link>
                            </li>
                            <li>
                                <Link to="/">Gift Cards</Link>
                            </li>
                            <li>
                                <Link to="/">Refer a Friend</Link>
                            </li>
                            <li>
                                <Link to="/">Download Our App</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_content">
                        <h3>company</h3>
                        <ul>
                            <li>
                                <Link to="/">Our Store</Link>
                            </li>
                            <li>
                                <Link to="/">Our Story</Link>
                            </li>
                            <li>
                                <Link to="/">Our Materials</Link>
                            </li>
                            <li>
                                <Link to="/">Sustainability</Link>
                            </li>
                            <li>
                                <Link to="/">Investors</Link>
                            </li>
                            <li>
                                <Link to="/">Shoes Care</Link>
                            </li>
                            <li>
                                <Link to="/">Partnerships</Link>
                            </li>
                            <li>
                                <Link to="/">Product Testing</Link>
                            </li>
                            <li>
                                <Link to="/">Affiliates</Link>
                            </li>
                            <li>
                                <Link to="/">Bulk Orders</Link>
                            </li>
                            <li>
                                <Link to="/">Careers</Link>
                            </li>
                            <li>
                                <Link to="/">Press</Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Allbirds Responsible Disclosure Program
                                </Link>
                            </li>
                            <li>
                                <Link to="/">California Transparency Act</Link>
                            </li>
                            <li>
                                <Link to="/">Community Offers</Link>
                            </li>
                            <li>
                                <Link to="/">The Perch</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_external-property">
                    <div className="property_left">
                        <h3>follow the flock</h3>
                        <p>
                            Exclusive offers, a heads up on new things, and
                            sightings of Allbirds in the wild. Oh, we have cute
                            sheep, too. #allbirds
                        </p>
                        <ul>
                            <li>
                                <Link to="/">
                                    <img
                                        src="//cdn.allbirds.com/image/upload/q_auto/cms/7ALf4NFNH4VStmrXU0qSKK/0aa03178ac1a2dc0789703f6dac6e7ef/social-instagram.svg"
                                        alt="social_instagram"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img
                                        src="//cdn.allbirds.com/image/upload/q_auto/cms/7xfHyad7sKJ79rETGlNbOM/ac9fa263a6de12188e5d9d50f57dde0f/Tiktok-50x50.png"
                                        alt="social_tiktok"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img
                                        src="//cdn.allbirds.com/image/upload/q_auto/cms/55ZLXdMQu728huA78Qlfkb/faa7706d3b83f77d73026e3cfdaca7d0/social-facebook.svg"
                                        alt="social_facebook"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img
                                        src="//cdn.allbirds.com/image/upload/q_auto/cms/21mr16fk2UdEDlU1RMXFSv/95ece86af416dfcc2c66b6ffc55aca89/Youtube-50x50.png"
                                        alt="social_youtube"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="property_center">
                        <Link to="/">
                            <img
                                src="//cdn.allbirds.com/image/upload/f_auto,q_auto/cms/1X4EOQF1JJOjMbo48vDUzB/c249da5825f9ae39f1f53bdb90d65285/icon-b-corp.svg"
                                alt="certified"
                            />
                        </Link>
                    </div>
                    <div className="property_right">
                        <ul>
                            <li>
                                <Link to="/">
                                    <img
                                        src="//cdn.allbirds.com/image/upload/q_auto/cms/mpzswQHoLPhzgFkXpcZ7P/eba356c7c7929352d5d3eea6999f5ad3/flag-ca.svg"
                                        alt="country-flag_CA"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img
                                        src="//cdn.allbirds.com/image/upload/q_auto/cms/6FnrOphj9NsjD38uREtsBn/cbf3c42e92a6c0628da4462b04e92e2c/flag-au.svg"
                                        alt="country-flag_AU"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img
                                        src="//cdn.allbirds.com/image/upload/q_auto/cms/5OVl6dmwlwOJPrg5F3Ot1s/e9679772ddd64de49cd96cbd4a819743/flag-uk.svg"
                                        alt="country-flag_UK"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_privacy">
                    <span>
                        © 2022 Allbirds, Inc. All Rights Reserved.{" "}
                        <Link to="/">Terms</Link>,<Link to="/">Privacy</Link> &{" "}
                        <Link to="/">Accessibility</Link>
                    </span>
                    <button>Do Not Sell My Personal Information</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
