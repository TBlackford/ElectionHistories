// Libraries
import React, { Component } from 'react';

// Data
import data from './us/history.jsx';
import parties from './us/parties.jsx';

import Candidate from './Candidate.component';


export default class USCandidates extends Component {

    constructor(props) {
        super(props);

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

        this.state = {
            year: this.props.year,
            style: 
        };
    }

    setYear = (year) => {
        this.setState({ year: year });
    }

    render() {

        var candidate_list = data[this.props.year].candidates;
        var candidates = [];

        candidate_list.sort(function(a, b){return b.electoral - a.electoral});

        for(var i = 0; i < candidate_list.length; i++) {
            candidates.push(<Candidate year={this.props.year}
                party={candidate_list[i].party}
                name={candidate_list[i].name}
                electoral={candidate_list[i].electoral}
                popular={candidate_list[i].popular}/>)
        }

        return (
            <div>            
                <div id="candidates" style={this.props.style}>
                    {candidates}
                </div>    
            </div>
        );
    }

};