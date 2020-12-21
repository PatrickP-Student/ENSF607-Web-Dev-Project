import { Component } from "react";

class StaticInputFields extends Component {
    render() {
        let { label, placeholder } = this.props
        return (
            <div class="block">
                <div className="Section 1b">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">{label}</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" placeholder={placeholder} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StaticInputFields;