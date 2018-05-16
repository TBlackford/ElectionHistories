// Libraries
import React, { Component } from 'react';
import { selectAll, select, event } from 'd3-selection';
import { json } from 'd3-request';
import { sum } from 'd3-array';

// Data
import data from './us/history.jsx';
import parties from './us/parties.jsx';

export default class Results extends Component {

    constructor(props) {
        super(props);

        this.state = {
            year: this.props.year,
        };
    }

    makeElectoralGraph = () => {
        var candidates = data[this.props.year].candidates;

        var graph = [];
        var total = 0;

        // We only care about electoral votes
        // Get the total
        for( var i in candidates ) {
            total += parseInt(candidates[i].electoral);
        }

        for( var i in candidates ) {
            var width = ( parseInt( candidates[i].electoral ) / total ) * 100;
            var style = {
                "width": width + "%",
                "height": "20px",
                "backgroundColor": parties[candidates[i].party].colour
            }

            graph.push(<div style={style} />)
        }

        return graph;
    }

    render() {  
        var graph = this.makeElectoralGraph();

        return (
            <div style={{"display": "flex"}} >
                {graph}
            </div>
        );
    };


};