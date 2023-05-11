import { useEffect, useState } from "react";
import styled from "styled-components";
/* ---- Json to loop countries ---- */
import countriesList from "../json/countries.json"; // Make data dynamic, fetched from api to cookie, saved for 10 minutes? To save requests.

/* ---- Components ---- */
import RenderTeamComparison from "../components/RenderTeamComparison";
import CompareTeamData from "../components/RenderStatsCalculation/RenderStatsCalculation";

/* ---- Test Data || Start ---- */
import testDataLeagues from "../json/leagueData.json";
import testDataLeagueStanding from "../json/leagueStanding.json";
/* ---- Test Data || End ---- */

/* ---- Styled Components ---- */
const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    background-color: #080f0d;
    color: #e0f5f1;
    box-sizing: border-box;

    @keyframes testAnimation {
        0% {
            transform: translateX(0);
            min-height: 362px;
            width: 500px;
        }
        50% {
            transform: translateX(-100%);
            max-height: 0;
        }
        100% {
            transform: translateX(-100%);
            height: 80vh;
        }
    }
`;
const ListWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 100px;
    display: flex;
    overflow: hidden;
    position: relative;
    background-color: #131414;

    span {
        aspect-ratio: 1 / 1;
        color: #e0f5f1;
        box-sizing: border-box;
    }

    span > img {
        width: 100%;
        height: 100%;
    }

    span {
        pointer-events: none;
        display: flex;
        justify-content: center;
        padding: 0.5rem;
        z-index: 1;
        left: 0;
        top: 0;
        font-size: 0.6rem;
        position: relative;
        box-shadow: 5px 0 15px #131414;
    }

    span > p {
        width: 100%;
        font-weight: 100;
        font-style: italic;
        font-size: 0.6rem;
        margin-left: 1rem;
    }

    span > div {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span > div > img {
        display: flex;
        padding-top: 1rem;
        width: 65%;
        object-position: center;
        object-fit: cover;
    }
`;
const StandingList = styled.ul`
    max-width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;
    overflow: hidden;
    position: relative;
    overflow: scroll;
    list-style: none;
    padding: 0;
    margin: 0;

    * {
        border: none;
    }

    span,
    button {
        aspect-ratio: 1 / 1;
        color: #e0f5f1;
    }

    li:first-of-type {
        margin-left: 1rem;
    }

    li {
        box-sizing: border-box;
        aspect-ratio: 1 / 1;
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        /* gap: 0.5rem; */
        font-size: 0.6rem;
        position: relative;
        filter: saturate(0);
    }

    li:hover,
    li:hover p {
        cursor: pointer;
        visibility: visible;
    }

    li:hover img {
        transform: translateY(0.5rem);
        transition: transform 0.3s ease-out;
    }

    li:hover {
        filter: none;
    }

    li > p {
        width: 100%;
        text-align: center;
        top: 0;
        padding: 0.5rem;
        position: absolute;
        /* font-weight: 100 !important; */
        /* background-color: #13141456; */
        color: #7effdb;
        animation: neonEffect 0.3s linear infinite forwards;
        visibility: hidden;
    }

    li > img {
        width: 85%;
        object-fit: contain;
        object-position: center;
        transition: transform 0.6s ease-out;
    }

    p.rank {
        text-align: start;
        font-weight: 400;
        visibility: visible;
    }

    @keyframes neonEffect {
        0% {
            color: #e0fff6;
            text-shadow: 1px 1px 5px #0af8b598, 0 0;
        }

        50% {
            color: #7dffe5;
            text-shadow: 0px 0px 20px #00f6b0c1, 0 0;
        }

        100% {
            color: #7effdb;
            text-shadow: 1px 1px 5px #0af8b599, 0 0;
        }
    }
`;
const Form = styled.form`
    width: 100%;
    max-width: 1400px;
    height: 100px;
    display: flex;
    justify-content: end;
    overflow: hidden;
    position: relative;

    * {
        border: none;
    }

    span,
    button {
        aspect-ratio: 1 / 1;
        color: #e0f5f1;
    }

    input,
    select {
        width: 100%;
        height: 100%;
        padding-left: 2rem;
        right: 0;
        color: #e0f5f1;
        background-color: #131414;
        /* font-weight: 100 !important; */
        font-size: 2rem;
        letter-spacing: 0.1rem;
        /* animation: openForm 0.6s ease-in 1 forwards; */
    }

    input:hover,
    select:hover {
        color: #7effdb;
        font-style: italic;
        animation: neonEffectLight 0.3s linear infinite forwards;
        letter-spacing: 0.1rem;
    }

    select option {
        font-size: 4rem;
        font-weight: 100;
        font-style: italic;
        padding: 1rem;
    }

    span {
        pointer-events: none;
        position: absolute;
        display: flex;
        padding: 0.5rem;
        z-index: 1;
        left: 0;
        top: 0;
        font-size: 0.6rem;
    }

    span > p {
        width: 100%;
        font-weight: 100;
        font-style: italic;
        font-size: 0.6rem;
        margin-left: 1rem;
    }

    select {
        cursor: pointer;
        appearance: none;
    }

    button:first-of-type {
        font-size: 2.4rem;
    }

    button {
        background-color: #131414;
        font-size: 2rem;
        position: relative;
    }

    button:hover {
        cursor: pointer;
        animation: neonEffect 0.3s linear infinite forwards;
    }

    button > span {
        width: 100%;
        height: 100%;
        padding: 0 0 0.4rem 0;
        display: flex;
        justify-content: center;
        align-items: end;
        color: #e0f5f171;
        font-size: 0.6rem;
        font-style: italic;
        z-index: 1;
        transform: translateY(-0.5rem);
        pointer-events: none;
        position: absolute;
    }

    div.filler {
        aspect-ratio: 1 / 1;
        background-color: #131414;
    }

    @keyframes openForm {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(100vw);
        }
        100% {
            transform: translateX(0);
        }
    }

    @keyframes neonEffect {
        0% {
            color: #e0fff6;
            text-shadow: 1px 1px 5px #0af8b598, 0 0;
        }

        50% {
            color: #7dffe5;
            text-shadow: 0px 0px 15px #00f6b0c1, 0 0;
        }

        100% {
            color: #7effdb;
            text-shadow: 1px 1px 5px #0af8b599, 0 0;
        }
    }

    @keyframes neonEffectLight {
        0% {
            color: #e0fff6;
            text-shadow: 1px 1px 4px #0af8b598, 0 0;
        }

        50% {
            color: #7dffe5;
            text-shadow: 0px 0px 8px #00f6b0c1, 0 0;
        }

        100% {
            color: #7effdb;
            text-shadow: 1px 1px 4px #0af8b599, 0 0;
        }
    }
`;
const SelectedTeamsSection = styled.section`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    margin-top: 1.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    /* justify-content: center; */
    gap: 0.5rem;

    div.renderTeamCard {
        position: relative;
    }

    div.closeTeamCard {
        position: absolute;
        right: 0.6rem;
        top: 2.9rem;
        z-index: 3;
    }

    div.closeTeamCard:hover {
        cursor: pointer;
    }

    div.head {
        width: 250px;
        /* height: 100%; */
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: start;
        /* align-items: center; */
        background-color: #131414;

        span {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        span > h4 {
            font-weight: 200;
            font-size: 2rem;
            color: #7effdb;
        }

        span > p {
            font-weight: 200;
            margin-bottom: 0.5rem;
            letter-spacing: 1px;
        }

        hr {
            width: 100%;
            border: #e0f5f1 solid 0.5px;
        }

        div.top {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;

            .imageContainer {
                aspect-ratio: 1 / 1;
                max-width: 40%;
                display: flex;
                justify-content: left;
                box-sizing: border-box;

                img {
                    /* height: 100%; */
                    /* width: 100%; */
                    object-fit: contain;
                }
            }

            span {
                width: 50%;
                display: flex;
                flex-direction: column;
                /* align-items: start; */

                p {
                    font-size: 1rem;
                    font-weight: 200;
                    letter-spacing: 1px;
                }

                div.btns {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 5px;

                    button {
                        width: 100%;
                        border: none;
                        background-color: transparent;
                        color: #e0f5f1;
                        text-align: left;
                    }

                    button:hover {
                        cursor: pointer;
                        color: #1ee9c4;
                    }
                }
            }
        }
    }
`;

const Search = (props) => {
    /* ---- Toggle country selection if true = search, false = select ---- */
    const [toggleCountry, setToggleCountry] = useState(true);
    /* ---- Countries ---- */
    const [countries, setCountries] = useState("");
    /* ---- Search result ---- */
    const [searchKey, setSearchKey] = useState("");
    /* ---- Leagues as Objects || Fetched leagues from selected country ---- */
    const [leagues, setLeagues] = useState([]);
    /* ---- Selected League as Id || Selected league out of country leagues ---- */
    const [selectedLeague, setSelectedLeague] = useState("");
    /* ---- Standing of selected league ---- */
    const [leagueStanding, setLeagueStanding] = useState("");
    /* ---- Set 1st & 2nd selected team ---- */
    const [firstTeam, setFirstTeam] = useState([]);
    const [secondTeam, setSecondTeam] = useState([]);
    /* ---- Set statistic category ---- */
    const [statsData, setStatsData] = useState("all");

    useEffect(() => {
        setCountries(countriesList.response);
    }, []);

    const getCountryLeagues = (e) => {
        e.preventDefault();
        if (searchKey && searchKey != "") {
            /* ---- ONLY FOR TEST DATA ---- */
            // const data = testDataLeagues.response;
            // setLeagues(data);

            /* ---- REAL DATA ---- */
            const fetchLeagues = async function () {
                const options = {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
                        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
                    },
                };
                try {
                    const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/leagues?country=${searchKey}`, options);
                    const data = await response.json();
                    setLeagues(data.response);
                } catch (err) {
                    console.log(err);
                }
            };
            fetchLeagues();
        }
    };

    useEffect(() => {
        if (leagues != 0) {
            setSelectedLeague(leagues[0].league.id);
        }
    }, [leagues]);

    useEffect(() => {
        if (selectedLeague) {
            getLeagueStanding(selectedLeague);
        }
    }, [selectedLeague]);

    const renderCountries = (object) => {
        if (object) {
            return object.map((selected, i) => (
                <option key={i} value={selected.name}>
                    {selected.name}
                </option>
            ));
        }
    };

    /* ---- ONLY FOR TEST DATA ---- */
    // const renderLeagues = (object) => {
    //     return object.map((selected) => (
    //         <option key={selected.league.id} value={selected.league.id}>
    //             {selected.league.name}
    //         </option>
    //     ));
    // };

    /* ---- REAL DATA ---- */
    const renderLeagues = () => {
        if (searchKey && leagues != 0) {
            return leagues.map((leagueItem) => (
                <option key={leagueItem.league.id} value={leagueItem.league.id}>
                    {leagueItem.league.name}
                </option>
            ));
        } else {
            <></>;
        }
    };

    const getLeagueStanding = (id) => {
        if (id && leagues != 0) {
            console.log(id);

            /* ---- ONLY FOR TEST DATA ---- */
            // if (id == 39) {
            //     setLeagueStanding(testDataLeagueStanding.response[0].league);
            //     // setLeagueStanding(testDataLeagueStanding.response[0].league.standings[0]);
            // }

            /* ---- REAL DATA ---- */
            const fetchStanding = async function () {
                const options = {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
                        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
                    },
                };

                try {
                    const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=${id}`, options);
                    const data = await response.json();
                    setLeagueStanding(data.response[0].league);
                } catch (err) {
                    console.log(err);
                }
            };
            fetchStanding();
        }
    };

    const renderTeam = (selectedTeam) => {
        if (selectedTeam != 0) {
            return (
                <div className="renderTeamCard">
                    <div
                        className="closeTeamCard"
                        onClick={(e) => {
                            if (firstTeam || secondTeam) {
                                if (selectedTeam.team.id && selectedTeam.team.id == firstTeam?.team?.id) {
                                    setFirstTeam([]);
                                }
                                if (selectedTeam.team.id && selectedTeam.team.id == secondTeam?.team?.id) {
                                    setSecondTeam([]);
                                }
                            }
                        }}
                        key={selectedTeam.team.id}
                    >
                        🅧
                    </div>
                    <div>
                        <div className="head">
                            <span>
                                <h4>{selectedTeam.team.name}</h4>
                                <p>{selectedTeam.form}</p>
                            </span>
                            <hr />
                            <div className="top">
                                <div className="imageContainer">
                                    <img src={selectedTeam.team.logo} alt={selectedTeam.team.name + "team logo"} />
                                </div>
                                <span>
                                    <p>{`Rank: ${selectedTeam.rank}`}</p>
                                    <p>{`Total points: ${selectedTeam.points}`}</p>
                                    <div className="btns">
                                        <button onClick={(e) => setStatsData("all")}>OVERALL</button>
                                        <button onClick={(e) => setStatsData("home")}>HOME</button>
                                        <button onClick={(e) => setStatsData("away")}>AWAY</button>
                                    </div>
                                </span>
                            </div>
                            <div className="stats">
                                <span>
                                    {`Wins: ${selectedTeam?.[statsData].win}`}
                                    <br />
                                    {`Losses: ${selectedTeam?.[statsData].lose}`}
                                    <br />
                                    {`Draws: ${selectedTeam?.[statsData].draw}`}
                                    <br />
                                    {`Goals for: ${selectedTeam?.[statsData].goals.for}`}
                                    <br />
                                    {`Goals against: ${selectedTeam?.[statsData].goals.against}`}
                                    <br />
                                    {`Goal difference: ${selectedTeam.goalsDiff}`}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    const { sendKey } = props;
    return (
        <MainContainer>
            {/* <p>{api_key}</p> */}

            <Form onSubmit={getCountryLeagues}>
                <span>
                    1 <p>COUNTRY</p>
                </span>
                <button onClick={(e) => (e.preventDefault(), toggleCountry ? setToggleCountry(false) : setToggleCountry(true))}>⚈{toggleCountry ? <span>SELECT</span> : <span>SEARCH</span>}</button>
                {toggleCountry ? (
                    <select placeholder="Search country" value={searchKey} onChange={(e) => setSearchKey(e.target.value)}>
                        {countries ? renderCountries(countries) : <option></option>}
                    </select>
                ) : (
                    <input placeholder="Search country" type="text" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
                )}
                <button type="submit">☯︎</button>
            </Form>

            {leagues != 0 ? (
                /* ---- ONLY FOR TEST DATA ---- */
                // <Form>
                //     <span>
                //         2 <p>LEAGUE</p>
                //     </span>
                //     <div className="filler"></div>
                //     <select value={selectedLeague} onChange={(e) => setSelectedLeague(e.target.value)}>
                //         // {leagues ? renderLeagues(leagues) : <></>}
                //         //{" "}
                //     </select>
                // </Form>
                /* ---- REAL DATA ---- */
                <Form>
                    <span>
                        2 <p>LEAGUE</p>
                    </span>
                    <div className="filler"></div>
                    <select value={selectedLeague} onChange={(e) => setSelectedLeague(e.target.value)}>
                        {leagues ? renderLeagues() : <></>}
                    </select>
                </Form>
            ) : (
                <></>
            )}

            {/* ONLY FOR TEST DATA */}
            {/* {leagueStanding && leagueStanding != 0 ? (
                <>
                    <ListWrapper>
                        <span>
                            3 <p>STANDING</p>
                            <div>
                                <img src={leagueStanding.logo} alt={leagueStanding.name + " logo"} />
                            </div>
                        </span>
                        <StandingList>
                            {leagueStanding?.standings[0].map((standing) => (
                                <li
                                    onClick={(e) => {
                                        if (firstTeam == 0) {
                                            return console.log("First" + standing.team.id), setFirstTeam(standing);
                                        } else {
                                            return console.log("Second" + standing.team.id), setSecondTeam(standing);
                                        }
                                    }}
                                    key={standing.team.id}
                                >
                                    <img src={standing.team.logo} alt={standing.team.name + " team logo"} />
                                    <p className="rank">{standing.rank}</p>
                                    <p className="teamName">{standing.team.name}</p>
                                </li>
                            ))}
                        </StandingList>
                    </ListWrapper>
                </>
            ) : (
                <></>
            )} */}
            {/* REAL DATA */}

            {leagueStanding && leagueStanding != 0 ? (
                <>
                    <ListWrapper>
                        <span>
                            3 <p>STANDING</p>
                            <div>
                                <img src={leagueStanding.logo} alt={leagueStanding.name + " logo"} />
                            </div>
                        </span>
                        <StandingList>
                            {leagueStanding?.standings[0].map((standing) => (
                                <li
                                    onClick={(e) => {
                                        if (firstTeam == 0) {
                                            return console.log("First" + standing.team.id), setFirstTeam(standing);
                                        } else {
                                            return console.log("Second" + standing.team.id), setSecondTeam(standing);
                                        }
                                    }}
                                    key={standing.team.id}
                                >
                                    <img src={standing.team.logo} alt={standing.team.name + " team logo"} />
                                    <p className="rank">{standing.rank}</p>
                                    <p className="teamName">{standing.team.name}</p>
                                </li>
                            ))}
                        </StandingList>
                    </ListWrapper>
                </>
            ) : (
                <></>
            )}
            <SelectedTeamsSection>
                {firstTeam != 0 ? <>{renderTeam(firstTeam)}</> : <></>}
                {firstTeam != 0 && secondTeam != 0 ? (
                    <>
                        <RenderTeamComparison statsData={statsData} teamStats1={firstTeam} teamStats2={secondTeam} />
                    </>
                ) : (
                    <></>
                )}
                {secondTeam != 0 ? <>{renderTeam(secondTeam)}</> : <></>}
            </SelectedTeamsSection>
        </MainContainer>
    );
};

export default Search;
