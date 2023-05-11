import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 100%;
    min-width: 10vw;
    display: flex;
    justify-content: space-between;
    background-color: #131414;
    gap: 0.5rem;
    font-size: 1rem;

    p {
        width: 50%;
        text-align: center;
    }
`;

const StyledDraw = styled.span`
    width: 100%;
    background-color: #1c3b6d;
    color: e0f5f1;
`;

const StyledWin = styled.span`
    width: 100%;
    background-color: #1c6d47;
    color: e0f5f1;
`;

const StyledLoss = styled.span`
    width: 100%;
    background-color: #6d1c1c;
    color: e0f5f1;
`;

const RenderStatsCalculation = (props) => {
    const { team1, team2, statName } = props;
    let results = "";

    if (team1 === team2) {
        results = [undefined];
    } else if (team1 > team2) {
        results = 1;
    } else {
        results = 2;
    }

    if (!results) {
        return (
            <StyledDiv>
                <StyledDraw>{team1}</StyledDraw>
                <p>{statName}</p>
                <StyledDraw>{team2}</StyledDraw>
            </StyledDiv>
        );
    } else if (results == 1) {
        return (
            <StyledDiv>
                <StyledWin>{team1}</StyledWin>
                <p>{statName}</p>
                <StyledLoss>{team2}</StyledLoss>
            </StyledDiv>
        );
    } else {
        return (
            <StyledDiv>
                <StyledLoss>{team1}</StyledLoss>
                <p>{statName}</p>
                <StyledWin>{team2}</StyledWin>
            </StyledDiv>
        );
    }
};

export default RenderStatsCalculation;
