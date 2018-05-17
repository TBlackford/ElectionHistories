// Libraries
import React, { Component } from 'react';

// Data
import data from './us/history.jsx';
import parties from './us/parties.jsx';


export default class USCandidates extends Component {

    constructor(props) {
        super(props);

        this.state = {
            year: this.props.year,
        };
    }

    setYear = (year) => {
        this.setState({ year: year });
    }

    getColour = (party) => {
        return parties[party].colour;
    }

    render() {
        var image_style = {
            "float": "left",
            "height": "104px",
            "minWidth": "100%",
        }
        var div_style = {
            height: "104px",
            width: "70px",
            overflow: "hidden",
        }

        var candidate_list = data[this.props.year].candidates;
        var candidates = [];

        candidate_list.sort(function(a, b){return b.electoral - a.electoral});

        for(var i = 0; i < candidate_list.length; i++) {
            var style = {
                "borderLeft": "6px solid " + this.getColour(candidate_list[i].party),
                "width": "200px",
                "margin": "0 auto",
                "padding": "16px",
                "textAlign": "left",
            }
            var right_div = {
                "float": "right"
            }

            var image = <div />

            try {
                image = <img style={image_style} src={require('../img/us/' + candidate_list[i].name + " - " + this.props.year + ".jpg")} />
            } catch (err) {
                image = <img style={image_style} src={require('../img/Default.jpg')} />
            }
            
            if( candidate_list[i].name != candidate_list[i].party ) {
                candidates.push(
                    <div>
                        <table>
                            <tbody>
                            <tr>                                
                                <td>
                                    <p style={style} ><b>Party: </b>{candidate_list[i].party}<br/>
                                    <b>Name: </b>{candidate_list[i].name}<br />
                                    <b>Electoral votes: </b>{candidate_list[i].electoral}<br />
                                    <b>Popular votes: </b>{candidate_list[i].popular}
                                    </p>
                                </td>
                                <td>
                                    <div style={div_style}>
                                        {image}
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>                        
                    </div>
                )
            } else {
                candidates.push(
                    <div>
                        <table>
                            <tbody>
                            <tr>                                
                                <td>
                                    <p style={style} ><b>Party: </b>{candidate_list[i].party}<br/>
                                    <b>Electoral votes: </b>{candidate_list[i].electoral}<br />
                                    <b>Popular votes: </b>{candidate_list[i].popular}
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>    
                    </div>
                )
            }
        }
        
        return (
            <div>            
                <div id="candidates" style={this.props.style}>
                    {candidates}
                </div>    
            </div>
        )
    }

};