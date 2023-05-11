import styled from "styled-components";

const StyledPageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PageWrapper = (props) => {
    const { children } = props;
    return <StyledPageWrapper>{children}</StyledPageWrapper>;
};
export default PageWrapper;
