// Libraries
import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import Map from './Map.component'
import Candidates from './Candidates.component.jsx';
import ReactHover from 'react-hover';
import Results from './Results.component';
import PieChart from "react-svg-piechart"

import InfoModalButton from './InfoModalButton.component';
import InfoModal from './InfoModal.component';

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
            graphsShowing: false,
            mapstyle: {
                width: 959,
                height: 593
            },
            candidate_list: [],
            visible: false,
        };

        this.changeMapDims = this.changeMapDims.bind(this);
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

    changeMapDims = () => {
        this.state.graphsShowing = !this.state.graphsShowing

        if(this.state.graphsShowing)
            this.setState({mapstyle: {width: 959 / 3, height: 593 / 3}});
        else
            this.setState({mapstyle: {width: 959, height: 593}});
    };

    getChartData = (type) => {
        var candidates = data[this.props.year].candidates;
        
        var d = []        

        for( var i in candidates) {
            d.push({
                title: candidates[i].party,
                value: parseInt(candidates[i][type].replace(",", "").replace(",", "")),
                color: parties[candidates[i].party].colour
            });
        }

        return d;
    };

    makePiechart = (dataType) => (
        <PieChart                
            expandOnHover={true}
            data={this.getChartData(dataType)}
            viewBoxSize={100}
        />
    );

    makeAllCharts = () => {
        // the popular vote existed before 1820, but I have no data before 1820
        if(this.props.year > 1820) {
            return (
                <div>
                    <h4>Electoral</h4>
                    <div style={{width: "125px", height: "125px"}}>                            
                        {this.makePiechart("electoral")}                            
                    </div>

                    <h4>Popular</h4>
                    <div style={{width: "125px", height: "125px"}}>    
                        {this.makePiechart("popular")}
                    </div>
                </div>
            )
        }

        return (
            <div>
                <h4>Electoral</h4>
                <div style={{width: "125px", height: "125px"}}>                            
                    {this.makePiechart("electoral")}                            
                </div>
            </div>
        )        
    };

    changeModalVisibility = () => {
        this.setState({visible: !this.state.visible});
    }

    render() {        

        var style = {
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-138px",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            position: "absolute"
        }        

        var header_style = {
            fontSize: "100px",
            color: "#ddd",
            transform: "rotate(-90deg)",
            zIndex: "2000000",
            position: "absolute",
            left: "-60px",
            display: "flex",
            verticalAlign: "middle",
            marginTop: (window.innerHeight / 2) - (220)
        }
             
        return (
            <div id="us-container">
                <div className="App">
                    <Results year={this.props.year} changeMap={this.changeMapDims}/>

                    <InfoModal visible={this.state.visible} year={this.props.year} changeModalVisibility={this.changeModalVisibility}/>
                    
                    <div style={header_style}>
                        <InfoModalButton changeModalVisibility={this.changeModalVisibility}/>
                        <h3>{this.props.year}</h3>
                    </div>

                    <div style={style}>                        
                        {this.makeAllCharts()}
                        <Map style={this.state.mapstyle} id="map" title={""} year={this.props.year} geojson={this.getGeoJSON(this.props.year)} customize={this.statesCustomConfig()} onClick={this.mapHandler} />
                        <Candidates style={{maxHeight: "50%"}} year={this.props.year}/>    
                    </div>           
                </div>                    
            </div>
        );
    }
}
