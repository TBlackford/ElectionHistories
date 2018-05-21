// Libraries
import React, { Component } from 'react';

// Data
import data from './us/history.jsx';
import parties from './us/parties.jsx';

import Candidate from './Candidate.component';


export default class USCandidates extends Component {

    constructor(props) {
        super(props);

        this.state = {
            year: this.props.year,
            style: this.props.style
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

        var style = {}

        if(candidate_list.length > 5) {
            style = {
                overflowY: "scroll"
            }
        }

        return (       
            <div id="candidates" style={Object.assign({}, this.state.style, style)}>
                {candidates}
            </div>    
        );
    }
};