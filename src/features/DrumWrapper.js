import React, { Component } from 'react'

import closedHat from 'resources/drum-samples/Cev_H2.mp3';
import openHat from 'resources/drum-samples/Dsc_Oh.mp3';
import heaterOne from 'resources/drum-samples/Heater-1.mp3';
import heaterTwo from 'resources/drum-samples/Heater-2.mp3';
import heaterThree from 'resources/drum-samples/Heater-3.mp3';
import heaterFour from 'resources/drum-samples/Heater-4_1.mp3';
import heaterFive from 'resources/drum-samples/Heater-6.mp3';
import kickNHat from 'resources/drum-samples/Kick_n_Hat.mp3';
import kick from 'resources/drum-samples/RP4_KICK_1.mp3';
import Drum from './Drum';

const drumSamples = [
    { keyName: 'q', name: 'Closed Hat', audio: new Audio(closedHat) }, 
    { keyName: 'w', name: 'Open Hat', audio: new Audio(openHat) }, 
    { keyName: 'e', name: 'Heater One', audio: new Audio(heaterOne) }, 
    { keyName: 'a', name: 'Heater Two', audio: new Audio(heaterTwo) }, 
    { keyName: 's', name: 'Heater Three', audio: new Audio(heaterThree) }, 
    { keyName: 'd', name: 'Heater Four', audio: new Audio(heaterFour) }, 
    { keyName: 'z', name: 'Heater Five', audio: new Audio(heaterFive) }, 
    { keyName: 'x', name: 'Kick n\' Hat', audio: new Audio(kickNHat) }, 
    { keyName: 'c', name: 'Kick', audio: new Audio(kick) }
];

class DrumWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drums: drumSamples,
            display: '',
        }
    }
    
    // Callback to pull sample name from child to pass to display div
    handleCallback = (childData) => {
        this.setState({
            display: childData,
        })
    }

    render() {
        return (
            <div id="drum-machine">
                <div className='button-container'>
                    {this.state.drums.map(obj => <Drum obj={obj} callback={this.handleCallback} />)}
                </div>
                <div id='display'>
                    {this.state.display}
                </div>
            </div>
        )
    }
}

export default DrumWrapper