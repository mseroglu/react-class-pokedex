import React, { Component } from "react";
import Pokecard from "./PokeCard";

class Pokedex extends Component {

    render() {
        return (
            <div className="pokedex">
                {
                    this.props.isWinner 
                    ? <h3 className="winner winlose">Winner Player Point: {this.props.exp} </h3>
                    : <h3 className="loser winlose">Loser Player Point: {this.props.exp} </h3>
                }
                
                <div className="card-container">
                    {
                        this.props.pokemon.map(item => (
                            <Pokecard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                type={item.type}
                                exp={item.base_experience} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Pokedex
