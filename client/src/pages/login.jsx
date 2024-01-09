import axios from "axios";

function Login() {
    const google = async () => {
        const data = await axios.get("http://localhost:5050/api/auth/google");
        const { authorizationUrl } = data.data;
        window.location.assign(authorizationUrl);
    };
    const facebook = async () => {
        const data = await axios.get(
            "http://localhost:5050/api/auth/facebook/"
        );
        const { authorizationUrl } = data.data;
        console.log(authorizationUrl);
        window.location.assign(authorizationUrl);
    };

    return (
        <div>
            <h4 onClick={() => google()} style={{ cursor: "pointer" }}>
                google
            </h4>
            <h4 onClick={() => facebook()} style={{ cursor: "pointer" }}>
                facebook
            </h4>
        </div>
    );
}

export default Login;
