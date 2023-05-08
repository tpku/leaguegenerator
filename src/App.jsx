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

    console.log("APP: " + validate);
    return (
        <BrowserRouter>
            <div className="App">
                <Nav title="FusbApp 2000" validate={validate} setSendLogout={setValidate} />
                <MainWrapper>
                    {/* {validate ? <p>True</p> : <p>False</p>} */}
                    <Routes>
                        <Route path="/" element={validate ? <Navigate to="/search" replace /> : <Home setValidate={setValidate} setSendKey={setSendKey} exact />} />
                        <Route path="/search" element={validate ? <Search sendKey={sendKey} /> : <Navigate to="/" replace />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </MainWrapper>
            </div>
        </BrowserRouter>
    );
}

export default App;
