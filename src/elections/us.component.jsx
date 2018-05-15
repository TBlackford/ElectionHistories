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

    getGeoJSON = () => {
        var geojson = data[this.props.year].GeoJSON;

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
        const optionsCursorTrueWithMargin = {
            followCursor: true,
            shiftX: 0,
            shiftY: -80
        } 
        const hoverStyle = {
           "background-color": "white",
           "width": "300px",
           "height": "150px",
           "border": "1px solid #ccc"
        }
        var style = {}
        if( this.props.year == "1872" ) {
            style = {
                "overflow-y": "scroll"
            }
        }
        
        return (
            <div id="us-container">
                <div className="App">
                    <Map id="map" title={this.props.year + " Election"} geojson={this.getGeoJSON()} customize={this.statesCustomConfig()} onClick={this.mapHandler} />  
                    <Candidates style={style} year={this.props.year}/>               
                </div>                    
            </div>     
        );
        return (
            <div id="us-container">
                <div className="App">
                    <ReactHover options={optionsCursorTrueWithMargin}>
                        <ReactHover.Trigger type='trigger'>
                            <Map id="map" title={""} geojson={this.getGeoJSON()} customize={this.statesCustomConfig()} onClick={this.mapHandler} />
                        </ReactHover.Trigger>
                        <ReactHover.Hover type='hover'>
                            <div style={hoverStyle}>
                                <p>--Albert Einstein</p>
                            </div>
                        </ReactHover.Hover>
                    </ReactHover>   
                    <Candidates style={style} year={this.props.year}/>               
                </div>                    
            </div>     
        );
    }
}
