import styled from "styled-components";

const StyledHeading = styled.h2`
    font-size: 5rem;
    line-height: 0.9;
    font-weight: 200;
    font-style: italic;
    pointer-events: none;
`;

const Heading = (props) => {
    const { children } = props;
    return (
        <>
            <StyledHeading>{children}</StyledHeading>
        </>
    );
};
export default Heading;
