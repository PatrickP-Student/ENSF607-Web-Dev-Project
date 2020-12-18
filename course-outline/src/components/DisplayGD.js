import { Component } from "react";
import FinalGradesDetermination from './FinalGradesDetermination';

//Need to eventually include key and get text input from here
class DisplayGD extends Component {
    render() {
        return this.props.displayGD.map( (learnObj) => (
            <FinalGradesDetermination/>
        ));
    }
}

export default DisplayGD;