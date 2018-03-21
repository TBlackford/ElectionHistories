import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import 'react-input-range/lib/css/index.css'

// For slider
import InputRange from 'react-input-range';

export default class ElectionSlider extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            year: 2016,
        };
    }
    
    onChangeEvent = (year) => {
        this.setState({ year });
    }

    render() {
        return (
            <div id="bottom-container">
                <div id="info-box">
                    <form className="form">
                        <InputRange
                            maxValue={2016}
                            minValue={1788}
                            value={this.state.year}
                            step={4}
                            onChange={year => this.onChangeEvent(year)}
                            onChangeComplete={value => console.log(value)} />
                    </form>
                </div>
            </div>
        );
    }
}
