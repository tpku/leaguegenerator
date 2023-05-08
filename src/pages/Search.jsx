import { useEffect, useState } from "react";
import styled from "styled-components";

/* ---- Test Data || Start ---- */
import testDataLeagues from "../json/leagueData.json";
import testDataLeagueStanding from "../json/leagueStanding.json";
import countriesList from "../json/countries.json"; // Make data dynamic, fetched from api to cookie, saved for 10 minutes? To save requests.
/* ---- Test Data || End ---- */

/* ---- Styled Components ---- */
const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
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

const Form = styled.form`
    width: 100%;
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
        color: #e0f5f1;
        right: 0;
        width: 100%;
        height: 100%;
        padding-left: 2rem;
        background-color: #131414;
        font-weight: 100 !important;
        font-size: 2rem;
        /* animation: openForm 0.6s ease-in 1 forwards; */
    }

    input:hover,
    select:hover {
        color: #7effdb;
    }

    select option {
        font-size: 4rem;
        font-weight: 100;
        font-style: italic;
    }

    span {
        position: absolute;
        padding: 0.5rem;
        z-index: 1;
        left: 0;
        top: 0;
    }
    select {
        cursor: pointer;
    }
    button {
        background-color: #131414;
        font-size: 2rem;
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
`;

const Search = (props) => {
    /* ---- Toggle country selection if true = search, false = select ---- */
    const [toggleCountry, setToggleCountry] = useState(true);
    /* ---- Countries ---- */
    const [countries, setCountries] = useState("");
    /* ---- Search result ---- */
    const [searchKey, setSearchKey] = useState("");
    /* ---- Leagues as Objects || Fetched leagues from selected country ---- */
    const [leagues, setLeagues] = useState([""]);
    /* ---- Selected League as Id || Selected league out of country leagues ---- */
    const [selectedLeague, setSelectedLeague] = useState("");

    useEffect(() => {
        setCountries(countriesList.response);
    }, []);

    if (searchKey) {
        // console.log(leagues);
    }

    const getCountryLeagues = (e) => {
        e.preventDefault();
        if (searchKey && searchKey != "") {
            console.log({ searchKey });

            const foo = async function () {
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
                    console.log(data);
                } catch (err) {
                    console.log({ err });
                }
            };

            const boo = foo();
            console.log(boo);
        }
    };

    // const renderLeagues = (object) => {
    //     if (searchKey == object.country) {
    //         return object.map((selected) => (
    //             <option key={selected.league.id} value={selected.league.id}>
    //                 {selected.league.name}
    //             </option>
    //         ));
    //     }
    // };

    // const renderLeagues = () => {
    //     if (searchKey && leagues) {
    //         return leagues.map((leagueItem) => (
    //             <option key={leagueItem.league.id} value={leagueItem.league.id}>
    //                 {leagueItem.league.name}
    //             </option>
    //         ));
    //     }
    // };

    const renderCountries = (object) => {
        if (object) {
            return object.map((selected, i) => (
                <option key={i} value={selected.name}>
                    {selected.name}
                </option>
            ));
        }
    };

    useEffect(() => {
        console.log(searchKey);
    }, [leagues]);

    const { sendKey } = props;
    return (
        <MainContainer>
            {/* <p>{api_key}</p> */}

            <Form onSubmit={getCountryLeagues}>
                <span>1</span>
                <button onClick={(e) => (e.preventDefault(), toggleCountry ? setToggleCountry(false) : setToggleCountry(true))}>⚈</button>
                {toggleCountry ? (
                    <select placeholder="Search country" value={searchKey} onChange={(e) => setSearchKey(e.target.value)}>
                        {countries ? renderCountries(countries) : <option></option>}
                    </select>
                ) : (
                    <input placeholder="Search country" type="text" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
                )}
                {/* <input placeholder="Search country" type="text" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} /> */}
                {/* <select placeholder="Search country" value={searchKey} onChange={(e) => setSearchKey(e.target.value)}>
                    {countries ? renderCountries(countries) : <option></option>}
                </select> */}
                <button type="submit">☯︎</button>
            </Form>

            {leagues ? (
                <Form>{/* <select>{leagues ? renderLeagues() : <option>{searchKey} is not a valid country</option>}</select> */}</Form>
            ) : (
                // <Form>
                //     <select>{leagues ? renderLeagues(leagues) : <option>{searchKey} is not a valid country</option>}</select>
                // </Form>
                <></>
            )}
        </MainContainer>
    );
};

export default Search;
