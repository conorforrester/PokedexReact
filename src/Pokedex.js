import React, {Component} from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
            {id: 1, name: 'Bulbasaur', type: 'Grass', base_experience: 70}
          ]
    }
    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: "center"}}>POKEDEX</h1>
                <h3 style={{textAlign: "center"}}>Total Experience: {this.props.exp}</h3>
                <h3 style={{textAlign: "center"}}>{this.props.isWinner ? 'WINNER' : "LOSER"}</h3>  
                <div className="Pokedex">
                {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} EXP={p.base_experience} />
                ))}
                </div>
            </React.Fragment>
        );
    }
}
 export default Pokedex;