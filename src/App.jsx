import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
/* Pages */
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";
/* Components */
import MainWrapper from "./components/MainWrapper";
import Nav from "./components/Nav";

function App() {
    const [sendKey, setSendKey] = useState("");
    const [validate, setValidate] = useState(false);

    // useEffect(() => {}, [validate]);

    return (
        <BrowserRouter>
            <div className="App">
                <Nav title="FusbApp League Generator" validate={validate} />
                <MainWrapper>
                    <h4>This is the main wrapper</h4>
                    {validate ? <p>True</p> : <p>False</p>}
                    <Routes>
                        {/* <Route path="/" element={<Login token={token} setToken={setToken} hide={true} />} />
                        <Route path="/search" element={<Search token={token} />} /> */}
                        <Route path="/" element={<Home setValidate={setValidate} setSendKey={setSendKey} exact />} />
                        <Route path="/search" element={validate ? <Search sendKey={sendKey} /> : <Navigate to="/" replace />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </MainWrapper>
            </div>
        </BrowserRouter>
    );
}

export default App;
