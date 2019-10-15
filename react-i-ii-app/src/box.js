import React, { Component } from 'react';
import Data from './data';
import './App.css';
import data from './data';


export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        if(data[this.state.index].id < 25) {
        this.setState({index: this.state.index += 1});
        }
    }

    decrement() {
        if(this.state.index > 0) {
        this.setState({index: this.state.index -= 1});
        }
    }

    render() {
        return(
            <div className="container">
                <div className="white-box">
                    <h2 className="index">{data[this.state.index].id + "/25" }</h2>
                    <h2 className="name">{data[this.state.index].name.first + " " + data[this.state.index].name.last}</h2>
                        <div className='info'>
                            <h3 className="from">{"From: "  + data[this.state.index].city} </h3>
                            <h3 className='job-title'>{"Job Title: "+data[this.state.index].title}</h3>
                            <h3 classname="employer">{"Employer: "+data[this.state.index].employer}</h3>
                            <br />
                            <h3 className="movies">Favorite Movies:
                                <ol>
                                    <li>{data[this.state.index].favoriteMovies[0]}</li>
                                    <br />
                                    <li>{data[this.state.index].favoriteMovies[1]}</li>
                                    <br />
                                    <li>{data[this.state.index].favoriteMovies[2]}</li>
                                    <br />
                                </ol>
                            </h3>
                        </div>
                </div>
                    <div className="buttons">
                        <button onClick={this.decrement} className="Previous">{"<Previous"}</button>
                        <button onClick={this.increment} className="Next">{"Next>"}</button>
                    </div>
            </div>
        )
    }

}