// Libraries
import React, { Component } from 'react';

// Data
import data from './us/history.jsx';
import parties from './us/parties.jsx';

export default class Candidate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            year: this.props.year,
            party: this.props.party,
            name: this.props.name,
            electoral: this.props.electoral,
            popular: this.props.popular
        };
    }

    getColour = (party) => {
        return parties[party].colour;
    }

    render() {
        var style = {
            "borderLeft": "6px solid " + this.getColour(this.props.party),
            "width": "200px",
            "margin": "0 auto",
            "padding": "16px",
            "textAlign": "left",
        }

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
        
        try {
            var image = <img style={image_style} src={require('../img/us/' + this.props.name + " - " + this.props.year + ".jpg")} />;
        } catch (err) {
            var image = <img style={image_style} src={require('../img/Default.jpg')} />;
        }

        return (
            <div>
                <table>
                    <tbody>
                    <tr>                                
                        <td>
                            <p style={style} ><b>Party: </b>{this.props.party}<br/>
                            {() => {
                                var name = this.props.name;
                                console.log(name)
                                if(this.props.name != undefined) {
                                    return <b>Name: </b> + name + <br/>
                                }
                            }}
                            <b>Electoral votes: </b>{this.props.electoral}<br />
                            <b>Popular votes: </b>{this.props.popular}
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
        );    
    }

}