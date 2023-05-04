import { useEffect, useState } from "react";

const Home = (props) => {
    const { children, setSendKey, setValidate } = props;
    const api_key = process.env.REACT_APP_API_KEY;

    const [visitor, setVisitor] = useState("");
    const [placeHolder, setPlaceHolder] = useState("John Doe");
    const [validated, setValidated] = useState(false);

    const validateVisitor = (e) => {
        e.preventDefault();
        const tester = document.querySelector(".tester");
        function onlyLettersAndNumbers(input) {
            return /^[A-Za-z]*$/.test(input);
        }

        const checkedVisitor = onlyLettersAndNumbers(visitor);
        if (visitor.length > 0 && checkedVisitor) {
            console.log("Welcome " + visitor.charAt(0).toUpperCase() + visitor.slice(1));
            // setSendKey(api_key);
            setValidated(true);
        }

        setPlaceHolder("Woah! Wacha name?");
        tester.style.borderColor = "red";
    };
    useEffect(() => {
        if (validated) {
            setValidate(validated);
        }
        console.log(validated);
    }, [validated]);

    return (
        <>
            <p>Welcome to FusbApp 2000</p>
            {/* <p>{api_key}</p> */}
            <form onSubmit={validateVisitor}>
                <input className="tester" placeholder={placeHolder} type="text" value={visitor} onChange={(e) => setVisitor(e.target.value.trim())} />
                <button type="submit">☯︎</button>
            </form>
            {children}
        </>
    );
};

export default Home;
