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

    buildGraph = () => {
        var data = [303, 189, 39];
        var colours = ["#FF9955", "#F07763", "#698DC5"]
        var i = 0;
        data.sort(function(a, b){return a-b});

        var width = "100%",
            height = 20,
            goal = 600,
            perc_so_far = 0;

        var total_time = sum(data);
        var chart = select("#chart")
            .attr("width", "100%")
            .attr("height", height).selectAll("g")
            .data(data)
            .enter().append("g")
            .append("rect")
            .attr("width", function(d) { return ((d/total_time)*100) + "%"; } )
            .attr("x", function(d) {
                var prev_perc = perc_so_far;
                var this_perc = 100*(d/total_time);
                perc_so_far = perc_so_far + this_perc;
                console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
                return prev_perc + "%";
            })
            .attr("height", height)
            .attr("fill",  function(d) { return colours[i++] } );
    };

    render() {
        console.log(data[this.props.year].candidates)

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
            console.log(parties[candidates[i].party]);
            var style = {
                "width": width + "%",
                "height": "20px",
                "backgroundColor": parties[candidates[i].party].colour
            }

            graph.push(<div style={style} />)
        }
        
        console.log(total);

        return (
            <div style={{"display": "flex"}}>
                {graph}
            </div>
        );
    }


};