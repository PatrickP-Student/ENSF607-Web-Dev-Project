import { Component } from "react";

class FinalGradesDetermination extends Component {
    render() {
        return (
            <div class="block">
                <div class="container">
                    <div class="columns">

                        <div class="column is-half">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" placeholder="Input grade component..." />
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" placeholder="Input outcome(s) evaluated..." />
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" placeholder="Input grading weight..." />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default FinalGradesDetermination;