// Libraries
import React, { Component } from 'react';

import InfoModal from './InfoModal.component';

export default class InfoModalButton extends Component {
    constructor(props) {
        super(props);

        var style = {
            fontSize: "100px",
            color: "#ddd",
            transform: "rotate(-90deg)",
            position: "absolute",
            left: "-60px",
            verticalAlign: "middle",
            marginTop: (window.innerHeight / 2) - (220), // Magic numbers are magic. But the 220 is roughly the size of the div
            height: "60px", 
            transform: "rotate(90deg)", 
            left: "290px", 
            marginTop: "155px",
        }

        this.state = {
            style: Object.assign({}, style, this.props.style),
            visible: false
        };
    }

    toggleVisible = () => {
        this.setState({visible: !this.state.visible});
        this.props.changeModalVisibility();
    }

    render() {
        return (
            <img onClick={this.toggleVisible} src={require("../img/info.svg")} style={this.state.style}/>
        );
    }
};