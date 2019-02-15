import React from 'react';

const StarWars = props => {
    return (
        <div>
            {props.starwarsChars.map(char => (
                <ul className="list" key={char.name}>
                    {char.name}
                    <li className="list-item">
                        Birth Year: {char.birth_year}
                    </li>
                    <li className="list-item">
                        Eye Color: {char.eye_color}
                    </li>
                    <li className="list-item">
                        Gender: {char.gender}
                    </li>
                    <li className="list-item">
                        Hair Color: {char.hair_color}
                    </li>
                    <li className="list-item">
                        Height: {char.height}
                    </li>
                    <li className="list-item">
                        Mass: {char.mass}
                    </li>
                    <li className="list-item">
                        Skin Color: {char.skin_color}
                    </li>
                </ul>
            ))}
        </div>
    );
};


export default StarWars;