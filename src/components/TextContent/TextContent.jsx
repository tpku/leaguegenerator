import styled from "styled-components";

const StyledParagraph = styled.p`
    font-size: 1rem;
    letter-spacing: 0.4px;
`;

const TextContent = (props) => {
    const { children } = props;
    return <StyledParagraph>{children}</StyledParagraph>;
};
export default TextContent;
