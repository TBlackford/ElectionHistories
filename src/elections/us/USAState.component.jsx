// Libraries
import React, { Component } from 'react';
import ReactHover from 'react-hover';

const USAState = (props) => {
    const optionsCursorTrueWithMargin = {
        followCursor: true,
        shiftX: 20,
        shiftY: 0
    }
    const hoverStyle = {
        "background-color": "white",
        "width": "300px",
        "height": "150px",
        "border": "1px solid #ccc"
    }
    console.log(props);
    return (        
        <ReactHover options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
                <path d={props.dimensions} fill={props.fill} data-name={props.state} className={props.state} onClick={props.onClickState} />
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
                <div style={hoverStyle}>
                    <p>--Albert Einstein</p>
                </div>
            </ReactHover.Hover>
        </ReactHover>
    );
}
export default USAState;
