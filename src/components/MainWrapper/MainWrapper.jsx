import styled from "styled-components";

const StyledMain = styled.main`
    width: 100%;
    min-height: 100vh;
    /* margin-top: 10vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainWrapper = (props) => {
    const { children } = props;
    return (
        <>
            <StyledMain>{children}</StyledMain>
        </>
    );
};
export default MainWrapper;
