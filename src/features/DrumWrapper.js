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
    { keyName: 'Q', name: 'Closed Hat', audio: closedHat }, 
    { keyName: 'W', name: 'Open Hat', audio: openHat }, 
    { keyName: 'E', name: 'Heater One', audio: heaterOne }, 
    { keyName: 'A', name: 'Heater Two', audio: heaterTwo }, 
    { keyName: 'S', name: 'Heater Three', audio: heaterThree }, 
    { keyName: 'D', name: 'Heater Four', audio: heaterFour }, 
    { keyName: 'Z', name: 'Heater Five', audio: heaterFive }, 
    { keyName: 'X', name: 'Kick n\' Hat', audio: kickNHat }, 
    { keyName: 'C', name: 'Kick', audio: kick }
];

class DrumWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drums: drumSamples,
            display: '',
            audioContext: null,
        }
    }

    handleFetch = async (path) => {
        try {
            let rsvp = await fetch(path);
            return this.state.audioContext.decodeAudioData(await rsvp.arrayBuffer())
        } catch (err) {
            console.log('ERR:', err.message)
        }
    }
    
    // Callback to pull sample name from child to pass to display div
    handleCallback = (childData) => {
        this.setState({
            display: childData,
        })
    }

    componentDidMount() {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        this.setState({audioContext: audioContext});
        this.setState(prevState => {
            let data = [...prevState.drums];
            data.map(obj => {
                this.handleFetch(obj.audio).then(buf => {
                    obj.audioBuffer = buf;
                    obj.context = this.state.audioContext;
                });
            })
            return { data };
        })
        console.log(this.state.drums)
    }

    render() {
        return (
            <div id="drum-machine">
                <div className='button-container'>
                    {this.state.drums.map((obj, i) => <Drum key={i} obj={obj} callback={this.handleCallback} />)}
                </div>
                <div id='display'>
                    {this.state.display}
                </div>
            </div>
        )
    }
}

export default DrumWrapper