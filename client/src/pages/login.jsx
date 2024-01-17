import { Link } from "react-router-dom";
import "../styles/login.scss";
// import axios from "axios";

function Login() {
    // const google = async () => {
    //     const data = await axios.get("http://localhost:5050/api/auth/google");
    //     const { authorizationUrl } = data.data;
    //     window.location.assign(authorizationUrl);
    // };
    // const facebook = async () => {
    //     const data = await axios.get(
    //         "http://localhost:5050/api/auth/facebook/"
    //     );
    //     const { authorizationUrl } = data.data;
    //     console.log(authorizationUrl);
    //     window.location.assign(authorizationUrl);
    // };

    return (
        <div className="login-register">
            {/* <h4 onClick={() => google()} style={{ cursor: "pointer" }}>
                google
            </h4>
            <h4 onClick={() => facebook()} style={{ cursor: "pointer" }}>
                facebook
            </h4> */}
            <div className="login-register-wrapper">
                <div className="login">
                    <h1 className="title">login</h1>
                    <label>email</label>
                    <input className="email" type="email" />
                    <label>password</label>
                    <input className="password" type="password" />
                    <input
                        type="submit"
                        value="sign in"
                        className="submit"
                        onClick={(e) => e.preventDefault()}
                    />
                    <span className="forgot">
                        <Link to="/">forgot password</Link>
                    </span>
                </div>
                <div className="register">
                    <h1 className="title">Create an account</h1>
                    <p>We never save credit card information.</p>
                    <p>
                        Registering makes checkout fast and easy and saves your
                        order information in your account.
                    </p>
                    <label>first name</label>
                    <input className="input-text" type="text" />
                    <label>last name</label>
                    <input className="input-text" type="text" />
                    <label>email*</label>
                    <input className="email" type="email" />
                    <label>password*</label>
                    <input className="password" type="password" />
                    <label>confirm password*</label>
                    <input className="password" type="password" />
                    <div className="checkbox-confirm">
                        <input id="checkbox" name="checkbox" type="checkbox" />
                        <label htmlFor="checkbox">
                            Email me with news and offers
                        </label>
                    </div>
                    <input
                        type="submit"
                        value="register"
                        className="submit"
                        onClick={(e) => e.preventDefault()}
                    />
                    <span className="privacy-policy">
                        by creating an account, you agree to our{" "}
                        <Link to="/">Terms of Use</Link> and{" "}
                        <Link to="/">Privacy Policy</Link>
                    </span>
                    <span className="required">* required fields</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
