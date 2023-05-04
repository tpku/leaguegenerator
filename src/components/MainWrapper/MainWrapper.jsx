import styled from "styled-components";

const StyledMain = styled.main`
    width: 100%;
    min-height: 100vh;
`;

const MainWrapper = (props) => {
    const { children } = props;
    return (
        <>
            <StyledMain>{children}</StyledMain>;
        </>
    );
};
export default MainWrapper;
