import styled from "styled-components";
/* ---- Components ---- */
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Heading from "../components/Heading";
import TextContent from "../components/TextContent";

/* Styled Components */
const ContentWrapper = styled.div`
    max-width: 500px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 0.5rem;
    border-radius: 2px;
    background-color: #080f0d;
    box-shadow: 0 5px 15px #00000096;
    animation: openLogin 0.3334s ease-in 3 forwards;
    transition: box-shadow, transform, 0.2s ease-in;

    a {
        color: #7effdb;
        z-index: 10;
        letter-spacing: 0.5px;
    }

    a:hover {
        pointer-events: auto;
        color: #0af8b5;
        font-style: italic;
        letter-spacing: 0.5px;
        text-decoration: line-through;
    }

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

    @keyframes openLogin {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
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

const About = () => {
    return (
        <>
            <PageWrapper>
                <ContentWrapper>
                    <Heading>About</Heading>
                    <TextContent>
                        This is a school project that involves building a web application using Create React App and styled-components, without relying on any additional frameworks. The application
                        utilizes the API-FOOTBALL provided by RapidAPI, and the deployed version currently uses hard-coded JSON.
                        <br />
                        <br />
                        To fully experience the application's functionality, you will need to subscribe to RapidAPI, create an application, and obtain your access key. Once you have your access key,
                        add it to your .env file as "REACT_APP_API_KEY = your access key here," and the application will handle the rest.
                        <br />
                        <br />
                        If you're interested in exploring the project further, head over to{" "}
                        <a target="_blank" href="https://github.com/tpku/leaguegenerator">
                            GitHub
                        </a>
                        , fork the project, and follow the instructions on how to get started.
                    </TextContent>
                </ContentWrapper>
            </PageWrapper>
        </>
    );
};

export default About;
