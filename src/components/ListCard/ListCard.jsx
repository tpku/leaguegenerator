import styled from "styled-components";
import styles from "./styles.module.css";

const StyledLi = styled.li`
    background-color: #2a2a2a;
    :hover {
        cursor: pointer;
        background-color: #212121;
    }
`;
const ListCard = (props) => {
    const { id, handleOnClick, src, alt, team, form } = props;

    return (
        <StyledLi value={id} key={id} onClick={handleOnClick}>
            <img src={src} alt={alt} />
            <p className={styles.teamStyle}>{team}</p>
            <p className={styles.formStyle}>{form}</p>
        </StyledLi>
        // <StyledLi onClick={props.handleOnClick} value={props.id} key={props.id}>
        //     <img src={props.src} alt={props.alt} />
        //     {props.title}
        // </StyledLi>
    );
};

export default ListCard;
