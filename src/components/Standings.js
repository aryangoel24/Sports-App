import axios from "axios";
import React, { useState, useEffect } from "react";
import {BallTriangle} from "react-loader-spinner";

const Standings = () => {
  const [selectedLeague, setSelectedLeague] = useState("4328");
  const [selectedYear, setSelectedYear] = useState("2022-2023");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData([]);
    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=${selectedLeague}&s=${selectedYear}`
        // `https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`
      )
      .then((res) => {
        console.log(res.data.table);
        setData(res.data.table);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [selectedYear, selectedLeague]);

  return (
    <div className="standings-container">
      <div className="select-fields">
        <select
          name="select-league"
          id="select-league"
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value="4328">English Premier League</option>
          <option value="4335">Spanish Primera División</option>
          <option value="4332">Italian Serie A</option>
          <option value="4331">German Bundesliga</option>
          <option value="4334">French Ligue 1</option>
          <option value="4356">Australian A-League</option>
          <option value="4337">Dutch Eredivisie</option>
          <option value="4790">Indonesian Liga 1</option>
          <option value="4350">Mexican Liga BBVA MX</option>
          <option value="4344">Portuguese Liga</option>
          <option value="4355">Russian Premier League</option>
          
        </select>
        <select
          name="select-year"
          id="select-year"
          onChange={(e) => setSelectedYear(e.target.value)}
          defaultValue={selectedYear}
        >
          <option value="2010-2011">2010</option>
          <option value="2011-2012">2011</option>
          <option value="2012-2013">2012</option>
          <option value="2013-2014">2013</option>
          <option value="2014-2015">2014</option>
          <option value="2015-2016">2015</option>
          <option value="2016-2017">2016</option>
          <option value="2017-2018">2017</option>
          <option value="2018-2019">2018</option>
          <option value="2019-2020">2019</option>
          <option value="2020-2021">2020</option>
          <option value="2021-2022">2021</option>
          <option value="2022-2023">2022</option>
        </select>
      </div>

      <div className="standing-results">
        {loading ? (
          <BallTriangle type="Circles" color="#00BFFF" height={80} width={80} />
        ) : (
          data?.map((data, index) => (
            <div key={index} className="standing-info">
              <h1>
                <span>
                  {`${index + 1}.`}
                  <img
                    src={data.strTeamBadge}
                    alt="#"
                    className="logo-small"
                  />
                </span>{" "}
                {data.strTeam}
              </h1>
              <p>MP: {data.intPlayed} | W: {data.intWin} | D: {data.intDraw} | L: {data.intLoss} | GD: {data.intGoalDifference} | Pts: {data.intPoints} </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Standings;
