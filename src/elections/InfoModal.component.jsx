// Libraries
import React, { Component } from 'react';

import info from './us/info';

export default class InfoModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style: this.props.style,
            visible: this.props.visible,
            year: this.props.year,
        };
    }

    getDisplayVisibility = () => {
        if(this.props.visible == true) {
            return "block";
        }

        return "none";
    }

    buildParagraph = (paragraph) => {
        // Accepts the paragraph object

        // Find each style
        switch(paragraph.type) {
            case "subheader": return <h4>{paragraph.text}</h4>;
            case "paragraph": return <p>{paragraph.text}</p>;
            case "blockquote": return <blockquote>{paragraph.text}</blockquote>;
        }
    }

    buildInfoParagraphs = () => {
        var year_info = info[this.props.year];
        var html = [];

        try {
            for(var i = 0; i < year_info.length; i++) {
                // Make the header
                html.push(<h3>{year_info[i].header}</h3>);

                var paragraphs = year_info[i].paragraphs
                // Get each paragraph
                for(var j = 0; j < paragraphs.length; j++) {
                    html.push(this.buildParagraph(paragraphs[j]));
                }
            }       
        } catch(err) {

        }

        if(html.length == 0) {
            html.push(<h3 style={{textAlign: "center"}}>No information for this year</h3>)
        }

        return html;
    }

    render() {
        return (
            <div className="modal" style={{display: this.getDisplayVisibility()}}>
                <div className="modal-content" style={this.state.style}>
                    <div className="modal-header">
                        <span className="close" onClick={this.props.changeModalVisibility}>&times;</span>
                        <h2>Information for the {this.props.year} Election</h2>
                    </div>
                    <div className="modal-body">
                        {this.buildInfoParagraphs()}
                    </div>
                </div>
            </div>
        );
    }
}