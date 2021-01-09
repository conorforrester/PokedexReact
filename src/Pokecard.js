import React, {Component} from 'react';
import './App.css';

const API_IMAGES_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

//function to add leading zeroes in Pokemon number to pull properly from API
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number );

class Pokecard extends Component {
    render() {
        const {id, name, type, EXP} = this.props;
        let Src = `${API_IMAGES_URL}${padToThree(id)}.png`;
        return (
            <div className="card">
                <h1>{name}</h1>
                <img 
                    src={Src}
                    height={150}
                    width={150}
                > 
                </img>
                <h3 style={{margin: 3}}>Type: {type}</h3>
                <h3 style={{margin: 3}}>EXP: {EXP}</h3>
            </div>
        );
    }
}

export default Pokecard;