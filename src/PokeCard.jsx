import React, { Component } from "react";
import "./Pokecard.css"


class Pokecard extends Component {

    render() {
        const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.props.id}.png`

        return (
            <div className="Pokecard">
                <h3 className="title">{this.props.name}</h3>
                <div className="card-image">
                    <img src={imgURL} alt={this.props.name} />
                </div>
                <div className="card-data"> Type: {this.props.type} </div>
                <div className="card-data"> Exp: {this.props.exp} </div>
            </div>
        )
    }
}

export default Pokecard