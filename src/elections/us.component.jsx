// Libraries
import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import Map from './Map.component'
import Candidates from './Candidates.component.jsx';
import ReactHover from 'react-hover';

// Logos and styles
import logo from './../logo.svg';
import './../css/App.css';

// Data
import data from './us/history.jsx';
import parties from './us/parties.jsx';

export default class USElection extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            year: this.props.year,
        };
    }
    
    setYear = (year) => {
        this.setState({ year: year });
    }

    getGeoJSON = (year) => {
        var geojson = data[year].GeoJSON;

        return geojson;
    };
    
    /* mandatory click event */
    mapHandler = (event) => {
        //console.log(event.target.dataset.name, event.target.dataset)
        //alert(event.target.dataset.name);
    };

    getColour = (party) => {
        return parties[party].colour;
    }

    /* optional customization of filling per state and calling custom callbacks per state */
    statesCustomConfig = () => {
        var fills = {};        
        
        var state_list = data[this.props.year].states;
        
        // Go through every state
        for( var state in state_list ) {
            for( var k = 0; k < Object.keys( state_list[state] ).length; k++ ) {
                //console.log(state, state_list[state]);

                // Set the custom data
                var d = {
                    fill: this.getColour(Object.keys(state_list[state][k])[0]),
                }

                // Add it to an array
                fills[state] = d;
            }       
        }

        return fills;
    };

    render() {       
        var style = {}
        if( this.props.year == "1872" ) {
            style = {
                "overflowY": "scroll"
            }
        }        
        
        return (
            <div id="us-container">
                <div className="App">
                    <Map id="map" title={""} year={this.props.year} geojson={this.getGeoJSON(this.props.year)} customize={this.statesCustomConfig()} onClick={this.mapHandler} />
                    <Candidates style={style} year={this.props.year}/>               
                </div>                    
            </div>     
        );
    }
}
