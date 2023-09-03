import styled from "styled-components";
import CompareTeamData from "../RenderStatsCalculation/RenderStatsCalculation";

const StyledDiv = styled.div`
    /* width: 100%;
    padding: 0.5rem;
    border-radius: 2px;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #131414;
    gap: 0.5rem;
    font-size: 1rem; */
`;

const RenderTeamComparison = (props) => {
    const { statsData, teamStats1, teamStats2 } = props;
    return (
        <StyledDiv>
            <CompareTeamData statName="W" team1={teamStats1?.[statsData].win} team2={teamStats2?.[statsData].win} />
            <CompareTeamData statName="L" team1={teamStats1?.[statsData].lose} team2={teamStats2?.[statsData].lose} />
            <CompareTeamData statName="D" team1={teamStats1?.[statsData].draw} team2={teamStats2?.[statsData].draw} />
            <CompareTeamData statName="GF" team1={teamStats1?.[statsData].goals.for} team2={teamStats2?.[statsData].goals.for} />
            <CompareTeamData statName="GA" team1={teamStats1?.[statsData].goals.against} team2={teamStats2?.[statsData].goals.against} />
            <CompareTeamData statName="GD" team1={teamStats1?.goalsDiff} team2={teamStats2?.goalsDiff} />
        </StyledDiv>
    );
};

export default RenderTeamComparison;
