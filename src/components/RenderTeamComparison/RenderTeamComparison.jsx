import styled from "styled-components";
import CompareTeamData from "../RenderStatsCalculation/RenderStatsCalculation";

const RenderTeamComparison = (props) => {
    const { statsData, teamStats1, teamStats2 } = props;
    return (
        <div>
            <CompareTeamData statName="W" team1={teamStats1?.[statsData].win} team2={teamStats2?.[statsData].win} />
            <CompareTeamData statName="L" team1={teamStats1?.[statsData].lose} team2={teamStats2?.[statsData].lose} />
            <CompareTeamData statName="D" team1={teamStats1?.[statsData].draw} team2={teamStats2?.[statsData].draw} />
            <CompareTeamData statName="GF" team1={teamStats1?.[statsData].goals.for} team2={teamStats2?.[statsData].goals.for} />
            <CompareTeamData statName="GA" team1={teamStats1?.[statsData].goals.against} team2={teamStats2?.[statsData].goals.against} />
            <CompareTeamData statName="GD" team1={teamStats1?.goalsDiff} team2={teamStats2?.goalsDiff} />
        </div>
    );
};

export default RenderTeamComparison;
