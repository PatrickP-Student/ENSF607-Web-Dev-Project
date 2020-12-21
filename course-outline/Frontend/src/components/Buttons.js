import { Component } from 'react';

class Buttons extends Component {
    render() {
        let { style, text, task } = this.props
        return (
            <button class={ style } onClick={ task }>{ text }</button>
        )
    }
}

export default Buttons;