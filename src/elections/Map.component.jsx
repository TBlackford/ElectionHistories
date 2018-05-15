// Libraries
import React, { Component } from 'react';
import PropTypes from "prop-types";

import USAState from "./us/USAState.component";
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { selectAll, select } from 'd3-selection';
import { json } from 'd3-request';

class Map extends Component {   
    constructor() {
        super();
        this.statesList = {
            'AL': 'Alabama',
            'AK': 'Alaska',
            'AZ': 'Arizona',
            'AR': 'Arkansas',
            'CA': 'California',
            'CO': 'Colorado',
            'CT': 'Connecticut',
            'DT': 'Dakota Territory',
            'DE': 'Delaware',
            'DC': 'District Of Columbia',
            'FL': 'Florida',
            'GA': 'Georgia',
            'HI': 'Hawaii',
            'ID': 'Idaho',
            'IL': 'Illinois',
            'IN': 'Indiana',
            'IA': 'Iowa',
            'KS': 'Kansas',
            'KY': 'Kentucky',
            'LA': 'Louisiana',
            'ME': 'Maine',
            'MD': 'Maryland',
            'MA': 'Massachusetts',
            'MI': 'Michigan',
            'MN': 'Minnesota',
            'MS': 'Mississippi',
            'MO': 'Missouri',
            'MT': 'Montana',
            'NE': 'Nebraska',
            'NV': 'Nevada',
            'NH': 'New Hampshire',
            'NJ': 'New Jersey',
            'NM': 'New Mexico',
            'NY': 'New York',
            'NC': 'North Carolina',
            'ND': 'North Dakota',
            'OH': 'Ohio',
            'OK': 'Oklahoma',
            'OR': 'Oregon',
            'PA': 'Pennsylvania',
            'RI': 'Rhode Island',
            'SC': 'South Carolina',
            'SD': 'South Dakota',
            'TN': 'Tennessee',
            'TX': 'Texas',
            'UT': 'Utah',
            'VT': 'Vermont',
            'VA': 'Virginia',
            'WA': 'Washington',
            'WV': 'West Virginia',
            'WI': 'Wisconsin',
            'WY': 'Wyoming'
        };
    }

    clickHandler = (stateAbbreviation) => {
        this.props.onClick(stateAbbreviation);
    };

    fillStateColor = (data) => {
        var state;

        if( data.properties.STATE == null ) {
            state = data.properties.LABEL;
        } else {
            state = data.properties.STATE;
        }

        if (this.props.customize && this.props.customize[state] && this.props.customize[state].fill) {
            return this.props.customize[state].fill;
        }

        return this.props.defaultFill;
    };    

    stateClickHandler = (data) => {
        var state = data.properties.STATE;

        if (this.props.customize && this.props.customize[state] && this.props.customize[state].clickHandler) {
            return this.props.customize[state].clickHandler
        }
        return this.clickHandler;
    };

    getDataName = (data) => {
        var state = data.properties.STATE;
        if( data.properties.STATE == null ) { 
            return data.properties.LABEL;
        } else {
            return state;
        }
    };

    getClassName = (data) => {
        var state = data.properties.STATE;
        if(this.statesList[state] != undefined) {
            return state + " state";
        } else {
            return data.properties.LABEL;
        }
    };

    buildPaths = () => {

        //Map dimensions (in pixels)
        var width = this.props.width,
            height = this.props.height;

        //Map projection
        var projection = geoAlbersUsa()
            .translate([width/2,height/2]) //translate to center the map in view

        //Generate paths based on projection
        var path = geoPath()
            .projection(projection);

        select("#SVGContainer").select("svg").remove()

        //Create an SVG
        var svg = select("#SVGContainer").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", "0 0 959 593");
        svg.append("svg:title").text(this.props.title);

        //Group for the map features
        var features = svg.append("g")
            .attr("class","features");

        var dataname = this.getDataName;
        var classname = this.getClassName;
        var fillcolour = this.fillStateColor;
        var clickhandler = this.stateClickHandler;

        json(require("./us/GeoData/" + this.props.geojson), function(error, geodata) {
            if (error) return console.log(error); //unknown error, check the console          
            //Create a path for each map feature in the data
            features.selectAll("path")
                .data(geodata.features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("data-name", dataname)
                .attr("class", classname)
                .attr("fill", fillcolour)
                .on("click", clickhandler);            
        });
    };

    render() {
        return (
            <div id="SVGContainer">
                {this.buildPaths()}
            </div>
        );
    }
}

Map.propTypes = {
    onClick: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
    defaultFill: PropTypes.string,
    customize: PropTypes.object
};

Map.defaultProps = {
    onClick: () => {},
    width: 959,
    height: 593,
    defaultFill: "#D3D3D3",
    title: "Blank US states map",
    customize: {}
};

export default Map;
