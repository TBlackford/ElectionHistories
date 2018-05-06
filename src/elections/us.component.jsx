// Libraries
import React, { Component } from 'react';
import USAMap from 'react-usa-map';

// Logos and styles
import logo from './../logo.svg';
import './../css/App.css';

// Data
import data from './us/history.jsx';

var COLOUR_NONPARTISAN = "#5FD35F";

var COLOUR_FEDERALIST = "#EA9978";
var COLOUR_DEMOCRATIC_REPUBLICAN = "#008000";

var COLOUR_NATIONAL_REPUBLICAN = "#FFE6B0";
var COLOUR_WHIG = "#F0C862";

var COLOUR_CONSTITUTIONAL_UNION = "#F59100";
var COLOUR_NORTHERN_DEMOCRATIC = "3333FF";
var COLOUR_SOUTHERN_DEMOCRATIC = "#4F990C";

var COLOUR_JACKSONIANS = "#7AA4E5";
var COLOUR_CLAY = "#E8EE73";
var COLOUR_CRAWFORD = "#FF9955";
var COLOUR_ADAMS = "#68C468";

var COLOUR_AMERICAN_INDEPENDENT = "#FF9955";

var COLOUR_REPUBLICAN = "#F07763";
var COLOUR_DEMOCRAT = "#698DC5";

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
    
    /* mandatory click event */
    mapHandler = (event) => {
        //console.log(event.target.dataset.name, event.target.dataset)
        //alert(event.target.dataset.name);
    };

    getColour = (party) => {
        switch( party ) {
            case "Independant": return 0;

            case "Nonpartisan": return COLOUR_NONPARTISAN;
            case "Territory": return "#808080";
                
            case "Whig": return COLOUR_WHIG;                
            case "Federalist": return COLOUR_FEDERALIST;      
                
            case "Democratic-Republican": return COLOUR_DEMOCRATIC_REPUBLICAN;
            case "Democratic-Republican (Jackson Faction)": return COLOUR_JACKSONIANS;
            case "Democratic-Republican (Clay Faction)": return COLOUR_CLAY;
            case "Democratic-Republican (Crawford Faction)": return COLOUR_CRAWFORD;
            case "Democratic-Republican (Adams Faction)": return COLOUR_ADAMS;

            case "National Republican": return COLOUR_NATIONAL_REPUBLICAN;

            case "National Union": return 0;    

            case "American Independent": return COLOUR_AMERICAN_INDEPENDENT;

            case "Democratic": return COLOUR_DEMOCRAT;
            case "Republican": return COLOUR_REPUBLICAN;

            default: "#EEE";
        }
    }

    /* optional customization of filling per state and calling custom callbacks per state */
    statesCustomConfig = () => {
        var fills = {};        
        
        var state_list = data[this.props.year].states;
        
        // Go through every state
        for( var state in state_list ) {
            for( var k = 0; k < Object.keys( state_list[state] ).length; k++ ) {

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
        return (
            <div id="us-container">
                <div className="App">
                    <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
                </div>
            </div>   
        );
    }
}
