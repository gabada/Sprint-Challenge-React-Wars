import React from 'react';

import './StarWars.css';

const StarWars = props => {
    return (
        <div>
            {props.starwarsChars.map(char => (
                <ul className="list" key={char.name}>
                    <h2>{char.name}</h2>
                    <li className="list-item">
                        Birth Year: {char.birth_year}
                    </li> <br />
                    <li className="list-item">
                        Eye Color: {char.eye_color}
                    </li><br />
                    <li className="list-item">
                        Gender: {char.gender}
                    </li><br />
                    <li className="list-item">
                        Hair Color: {char.hair_color}
                    </li><br />
                    <li className="list-item">
                        Height: {char.height}
                    </li><br />
                    <li className="list-item">
                        Mass: {char.mass}
                    </li><br />
                    <li className="list-item">
                        Skin Color: {char.skin_color}
                    </li><br />
                    <img src="https://www.ibm.com/thought-leadership/scienceandstarwars/images/share-lightsaber-blue.jpg" alt="lightsaber"/>
                </ul>
            ))}
        </div>
    );
};


export default StarWars;