import styled from "styled-components";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledNav = styled.header`
    width: 100vw;
    height: 5vh;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: none;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    z-index: 10;

    h1 {
        font-size: 1rem;
        font-weight: 200;
        font-style: italic;
        color: #7effdb;
        pointer-events: none;
        text-shadow: 1px 1px 5px #0af8b5, 0 0;
        animation: neonEffect 0.3s linear infinite forwards;
    }
    a {
        font-weight: 200;
        text-decoration: none;
        color: #e0f5f1;
    }
    a:hover {
        font-style: italic;
        color: #bcddd7;
        animation: neonEffect 0.3s linear infinite forwards;
    }

    :hover NavBackground {
        height: 5vh;
    }

    @keyframes neonEffect {
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

const Menu = styled.ul`
    display: flex;
    list-style: none;
`;

const MenuItem = styled.li`
    margin-left: 1.5rem;
    font-size: 1rem;
`;

const NavBackground = styled.div`
    width: 100%;
    height: 5vh;
    /* background-color: #080f0d; */
    position: absolute;
    top: 0;
    z-index: 0;
`;

const Nav = (props) => {
    const { title, validate, children, setSendLogout } = props;
    const [logout, setLogout] = useState(false);
    console.log("NAV: " + validate);

    const logoutVisitor = () => {
        // console.log("Logout");
        // console.log(validate);
        setSendLogout(logout);
        // console.log({ logout });
    };

    return (
        <>
            <StyledNav>
                <div>
                    <h1>{title}</h1>
                </div>
                {validate ? (
                    <Menu>
                        <MenuItem>
                            <Link to="/search">Search</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/about">About</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link onClick={logoutVisitor} to="/">
                                Logout
                            </Link>
                        </MenuItem>
                    </Menu>
                ) : (
                    <></>
                )}
            </StyledNav>
            <NavBackground />
        </>
    );
};
export default Nav;
