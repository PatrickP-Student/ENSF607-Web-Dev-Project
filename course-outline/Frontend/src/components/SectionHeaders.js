import { Component } from "react";

class SectionHeaders extends Component {
    render() {
        let { title } = this.props
        return (
            <div class="block">
            <div className="Section Header">
              <div class="container">

                <div class="notification is-info">
                  <strong>{ title }</strong>
                </div>

              </div>
            </div>
          </div>
        )
    }
}

export default SectionHeaders;