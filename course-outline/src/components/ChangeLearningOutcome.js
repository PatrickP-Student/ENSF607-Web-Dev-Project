import { Component } from "react";
import Buttons from './Buttons';


class ChangeLearningOutcome extends Component {

    addNew = () => {
        this.props.addNewLO();
    }

    removeLO = () => {
        this.props.removeLO();
    }

    render() {
    return (
        <div class="block">
            <div class="container">
                <div class="field is-grouped is-centered">

                    <div class="buttons">
                        <Buttons
                            style="button is-success is-light"
                            text="Add Learning Outcome"
                            task={() => this.addNew()}
                        />
                        <Buttons
                            style="button is-danger is-light"
                            text="Remove Learning Outcome"
                            task={() => this.removeLO()}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
    }

}

export default ChangeLearningOutcome;