import React, { Component } from 'react';
import "./Reservations.css"

export default class Reservations extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: 'dzc', 
            date:'wd',
            time:'v',
            number: 0
        }
    }


    render() {
         return (
        <section className='reservation-card' itemID={ this.state.id }>
            <h2>{this.state.name}</h2>
                <p>
                    {this.state.date}
                </p>
                <p>
                    {this.state.time}
                </p>
                <p>
                    Number of guest: {this.state.number}
                </p>
        </section>
          
            
        )
    }
}
