import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Search from "./pages/search";
import NotFound from "./pages/notFound";
import Account from "./pages/account";
import Addresses from "./pages/addresses";
import "./styles/global.scss";
import "./styles/index.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/account">
                        <Route index element={<Account />} />
                        <Route path="login" element={<Login />} />
                        <Route path="addresses" element={<Addresses />} />
                    </Route>
                    <Route path="/pages">
                        <Route index element={<NotFound />} />
                        <Route path="search" element={<Search />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
