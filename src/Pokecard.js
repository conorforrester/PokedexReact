import React, {Component} from 'react';
import './App.css';

const API_IMAGES_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
class Pokecard extends Component {
    render() {
        const {id, name, type, EXP} = this.props;
        let Src = `${API_IMAGES_URL}${id}.png`;
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