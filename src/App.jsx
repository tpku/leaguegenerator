import "./App.css";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

import MainWrapper from "./components/MainWrapper";
import Nav from "./components/Nav";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav title="FusbApp League Generator">
                    <Link to="/">Home</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/about">About</Link>
                </Nav>
                <MainWrapper>
                    <h4>This is the Main</h4>
                    <Routes>
                        {/* <Route path="/" element={<Login token={token} setToken={setToken} hide={true} />} />
                        <Route path="/search" element={<Search token={token} />} /> */}
                        <Route path="/" />
                        <Route path="/search" />
                    </Routes>
                </MainWrapper>
            </div>
        </BrowserRouter>
    );
}

export default App;
