import { Component } from "react";
import LearningOutcome from './LearningOutcome';

//Need to eventually include key and get text input from here
class DisplayLO extends Component {
    render() {
        return this.props.displayLO.map( (learnObj) => (
            <LearningOutcome/>
        ));
    }
}

export default DisplayLO;