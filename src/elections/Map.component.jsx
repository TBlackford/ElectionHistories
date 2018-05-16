// Libraries
import React, { Component } from 'react';
import PropTypes from "prop-types";

import USAState from "./us/USAState.component";
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { selectAll, select, event } from 'd3-selection';
import { json } from 'd3-request'

import data from './us/history.jsx';
import parties from './us/parties.jsx';

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

    getPartyColor = (party) => {
        return parties[party].colour;
    }

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

    getTooltipName = (data) => {
        if(data.properties.LABEL == "NU") {
            return this.getDataName(data);
        }
        return data.properties.LABEL;
    }

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

        select("#SVGContainer").selectAll("path").remove();   

        const optionsCursorTrueWithMargin = {
            followCursor: true,
            shiftX: 20,
            shiftY: -80
        }

        var dataname = this.getDataName;
        var classname = this.getClassName;
        var fillcolour = this.fillStateColor;
        var partycolour = this.getPartyColor;
        var clickhandler = this.stateClickHandler;
        var tooltipname = this.getTooltipName;
        var year = this.props.year;

        json(require("./us/GeoData/" + this.props.geojson), function(error, geodata) {
            if (error) return console.log("ERROR", error); //unknown error, check the console    
            
            var tooltip = selectAll(".tooltip:not(.css)");
            var HTMLmouseTip = select("div.tooltip.mouse");
            
            //Create a path for each map feature in the data
            select("#SVGContainer").select("#map").select("g").selectAll("path")
                .data(geodata.features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("data-name", dataname)
                .attr("class", classname)
                .attr("fill", fillcolour)
                .on("click", clickhandler)
                .on("mouseover", function (d) {
                    tooltip.style("opacity", "1");
                    //tooltip.style("color", this.getAttribute("fill") );
                    var matrix = this.getScreenCTM()
                            .translate(+this.getAttribute("cx"),
                                     +this.getAttribute("cy"));  

                    var candidate_list = data[year].candidates;  
                    var state_vote_list = data[year].states[dataname(d)]  

                    var html = "<table>"

                    function simple_html() {
                        return `<tr><td><p style="
                            border-left:6px solid ${fillcolour(d)};
                            width: 100%;
                            margin: 0 auto;
                            padding; 16px!important;
                            text-align:left;
                        ">
                        <b>&nbsp;</b><br/>
                        <b>&nbsp;&nbsp;&nbsp;Name: </b>${tooltipname(d)}&nbsp;&nbsp;<br/>
                        <b>&nbsp;</b><br/></p><td></tr>`;//*/
                    }

                    if( state_vote_list == undefined ) {
                        html += simple_html();
                    } else {
                        for(var i in state_vote_list) {
                            if( Object.keys(state_vote_list[i]) == "Territory" || Object.keys(state_vote_list[i]) == "Disputed Territory" ) {
                                html += `<tr><td><p style="
                                    border-left:6px solid ${fillcolour(d)};
                                    width: 100%;
                                    margin: 0 auto;
                                    padding; 16px!important;
                                    text-align:left;
                                ">
                                <b>&nbsp;</b><br/>
                                <b>&nbsp;&nbsp;&nbsp;Name: </b>${tooltipname(d)}&nbsp;&nbsp;<br/>`;
                                if(Object.keys(state_vote_list[i]) != undefined ) {
                                    html += `<b>&nbsp;&nbsp;&nbsp;${Object.keys(state_vote_list[i])}&nbsp;&nbsp</b><br/>`
                                }
                                
                                html += `<b>&nbsp;</b><br/></p><td></tr>`;//*/
                            } else {
                                html += `<tr><td style=""><p style="
                                        border-left:6px solid ${partycolour(Object.keys(state_vote_list[i]))};
                                        width: 100%;
                                        margin: 0 auto;
                                        padding; 16px!important;
                                        text-align:left;
                                    ">
                                    <b>&nbsp;</b><br/>
                                    <b>&nbsp;&nbsp;&nbsp;Name: </b>${tooltipname(d)}&nbsp;&nbsp;<br/>
                                    <b>&nbsp;&nbsp;&nbsp;Party: </b>${Object.keys(state_vote_list[i])}&nbsp;&nbsp;<br/>
                                    <b>&nbsp;&nbsp;&nbsp;Electoral votes: </b>${state_vote_list[i][Object.keys(state_vote_list[i])]}&nbsp;&nbsp;<br/>
                                    <b>&nbsp;</b>
                                    </p><td></tr>`;//*/
                            }
                        }
                    }            

                    html += "</table>";

                    tooltip.html(html);        
                })
                .on("mousemove", function () {               
                    HTMLmouseTip
                        .style("left", Math.max(0, event.pageX) + "px")
                        .style("top", (event.pageY - 80) + "px");
                })
                .on("mouseout", function () {
                    return tooltip.style("opacity", "0");
                });///*/
        });
    };//*/

    render() {
        var style = {
            "pointerEvents":"none",
            "opacity":"0",
            "transition": "opacity 0.3s",
            "backgroundColor": "white",
            "border": "1px solid #ccc",
            "marginTop": "12%",
            "position": "absolute"
        }

        return (
            <div id="SVGContainer">
                <svg id="map" width={this.props.width} height={this.props.height} viewBox={"0 0 959 593"}>
                    <title>{this.props.title}</title>
                    <g className="outlines">
                        {this.buildPaths()}
                    </g>
                </svg>
                <div style={style} className="mouse tooltip"></div>
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
