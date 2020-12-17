import { Component } from "react";
import Buttons from './Buttons';

class ChangeGradeDetermination extends Component {
    addNewGD = () => {
        this.props.addNewGD();
    }

    removeGD = () => {
        this.props.removeGD();
    }

    render() {
        return (
            <div class="block">
                <div class="container">
                    <div class="field is-grouped is-centered">
    
                        <div class="buttons">
                            <Buttons
                                style="button is-success is-light"
                                text="Add Grade Determination"
                                task={() => this.addNewGD()}
                            />
                            <Buttons
                                style="button is-danger is-light"
                                text="Remove Grade Determination"
                                task={() => this.removeGD()}
                            />
                        </div>
    
                    </div>
                </div>
            </div>
        )
    }
}

export default ChangeGradeDetermination;