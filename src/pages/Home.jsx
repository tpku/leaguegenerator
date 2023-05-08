import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginContainer = styled.div`
    /* min-height: 100vh; */
    max-width: 500px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    border-radius: 2px;
    background-color: #080f0d;
    box-shadow: 0 5px 15px #00000096;
    animation: ${(props) => props.loginAnimation || "openLogin"} 0.3334s ease-in 6 forwards;
    transition: box-shadow, transform, 0.2s ease-in;

    :hover {
        box-shadow: 0 4px 9px #000000c3;
        transform: translateY(5px);
        transition: box-shadow, transform, 0.2s ease-out;
        color: #7effdb;
    }

    :hover p,
    :hover h2 {
        text-shadow: 1px 1px 5px #0af8b5, 0 0;
        animation: hoverButton2 0.3s linear infinite forwards;
    }
    form {
        width: 100%;
        margin-top: 0.5rem;
        display: flex;
        gap: 0.5rem;
    }

    input {
        width: 100%;
        height: 3rem;
        padding-left: 0.5rem;
        background-color: #131414;
        color: #7effdb;
        font-size: 1rem;
        border: none;
        border-radius: 2px;
    }

    input:hover {
        animation: focusInput 0.1s linear infinite;
    }

    input:focus {
        outline: none !important;
        color: #7effdb;
        box-shadow: 0 0 15px #0af8b5 inset;
        text-shadow: 1px 1px 5px #0af8b5, 0 0;
        animation: focusInput 0.3s linear infinite;
    }

    button {
        width: 3rem;
        height: 3rem;
        background-color: #131414;
        color: #7c7c7c;
        font-size: 1.25rem;
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }

    button:hover {
        color: #7effdb;
        text-shadow: 1px 1px 10px #0af8b5, 0 0;
        animation: hoverButton 0.3s linear infinite;
    }

    button:active {
        background-color: #7effdb;
    }

    @keyframes openLogin {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
    @keyframes closeLogin {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }
    @keyframes focusInput {
        from {
            box-shadow: 0 0 15px #0af8b5c0 inset;
        }

        to {
            box-shadow: 0 5px 25px #0af8b5c2 inset;
        }
    }
    @keyframes hoverButton {
        0% {
            color: #e0fff6;
            text-shadow: 1px 1px 10px #0af8b5, 0 0;
        }

        50% {
            color: #28ffc2;
            text-shadow: 0px 0px 20px #00f6b1, 0 0;
        }

        100% {
            color: #7effdb;
            text-shadow: 1px 1px 10px #0af8b5, 0 0;
        }
    }
    @keyframes hoverButton2 {
        0% {
            color: #e0fff6;
            text-shadow: 1px 1px 5px #0af8b598, 0 0;
        }

        50% {
            color: #7dffe5;
            text-shadow: 0px 0px 10px #00f6b0c1, 0 0;
        }

        100% {
            color: #7effdb;
            text-shadow: 1px 1px 5px #0af8b599, 0 0;
        }
    }
`;

const LoginHeading = styled.h2`
    font-size: 5rem;
    line-height: 0.9;
    font-weight: 200;
    font-style: italic;
    pointer-events: none;
`;

const LoginText = styled.p`
    font-size: 0.8rem;
    pointer-events: none;
    letter-spacing: 0.2px;
`;

const Home = (props) => {
    const { children, setSendKey, setValidate } = props;
    const api_key = process.env.REACT_APP_API_KEY;

    const [visitor, setVisitor] = useState("");
    const [placeHolder, setPlaceHolder] = useState("John Doe");
    const [validation, setValidation] = useState(false);
    const [loginAnimation, setLoginAnimation] = useState("openLogin");

    const validateVisitor = (e) => {
        e.preventDefault();
        function onlyLettersAndNumbers(input) {
            return /^[A-Za-z]*$/.test(input);
        }
        const checkedVisitor = onlyLettersAndNumbers(visitor);

        if (visitor.length > 0 && checkedVisitor) {
            /* Valid Input */
            console.log("Welcome " + visitor.charAt(0).toUpperCase() + visitor.slice(1));
            setValidation(true);
            // setSendKey(api_key);
        } else {
            /* Not Valid Input */
            setPlaceHolder("Woah! Wacha name?");
            setValidation(false);
        }
    };

    useEffect(() => {
        if (validation) {
            setLoginAnimation("closeLogin");
            const delay = setTimeout(() => {
                setValidate(validation);
                console.log("HOME: " + validation);
            }, 2000);
            return () => clearTimeout(delay);
        }
    }, [validation]);

    return (
        <Wrapper>
            <LoginContainer loginAnimation={loginAnimation}>
                <LoginHeading>Welcome to FusbApp 2000</LoginHeading>
                <LoginText>
                    Please enter your name to start using FusbApp. Aren't you as eager as I am to find out about and compare all football clubs all around the world? Let's get to it! Wacha name?
                </LoginText>
                {/* <p>{api_key}</p> */}
                <form onSubmit={validateVisitor}>
                    <input placeholder={placeHolder} type="text" value={visitor} onChange={(e) => setVisitor(e.target.value.trim())} />
                    <button type="submit">☯︎</button>
                </form>
                {children}
            </LoginContainer>
        </Wrapper>
    );
};

export default Home;
