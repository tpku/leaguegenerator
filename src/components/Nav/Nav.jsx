import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #161617;
`;

const Nav = (props) => {
    const { title, validate, children } = props;
    return (
        <StyledNav>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <Link to="/">Home</Link>
                {!validate ? <></> : <Link to="/search">Search</Link>}
                <Link to="/about">About</Link>
            </div>
        </StyledNav>
    );
};
export default Nav;
