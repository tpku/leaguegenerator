import styled from "styled-components";

const StyledNav = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #161617;
`;

const Nav = (props) => {
    const { title, children } = props;
    return (
        <StyledNav>
            <div>
                <h1>{title}</h1>
            </div>
            <div>{children}</div>
        </StyledNav>
    );
};
export default Nav;
