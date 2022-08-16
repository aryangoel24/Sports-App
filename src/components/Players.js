import React, { useState, useEffect } from "react";
import axios from "axios";
import {BallTriangle} from "react-loader-spinner";



const Players = () => {

    const [format, setFormat] = useState('t20i')
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setData([]);
        axios
          .get(
            `https://factory-apis.herokuapp.com/api/cricket/team_ranking?format=${format}`
          )
          .then((res) => {
            console.log(res.data);
            setData(res.data)
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, [format]);

  return (
    <div className='standings-container'>
        <div className='select-options'>
        <select
          name="select-format"
          id="select-format"
          defaultValue={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="t20i">T20</option>
          <option value="odi">ODI</option>
          <option value="test">Test</option>
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
                  <img src={`https://countryflagsapi.com/png/${data.team.name}`} />
                </span>{" "}
                {data.team.name} {" "}
              </h1>
              <p>Played: {data.points} Rating: {data.rating}</p>
            </div>
          ))
        )}
      </div>
    </div>

  )
}

export default Players