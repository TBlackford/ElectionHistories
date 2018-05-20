// Libraries
import React, { Component } from 'react';

export default class InfoModal extends Component {
    constructor(props) {
        super(props);

        var style = {
            fontSize: "100px",
            color: "#ddd",
            transform: "rotate(-90deg)",
            zIndex: "2000000",
            position: "absolute",
            left: "-60px",
            display: "none",
            verticalAlign: "middle",
            marginTop: (window.innerHeight / 2) - (220),
            height: "60px", 
            transform: "rotate(90deg)", 
            left: "290px", 
            marginTop: "155px",
        }

        this.state = {
            style: Object.assign({}, style, this.props.style),
            visible: false,
            year: this.props.state
        };
    }

    getDisplayCSS = () => {
        if(this.state.visible == true) {
            return "block"
        }

        return "none"
    }

    toggleVisible = () => {
        this.setState({visible: !this.state.visible});
    }

    render() {
        return (
            <img onClick={this.toggleVisible()} src={require("../img/info.svg")} style={this.state.style} />
        );
    }
};