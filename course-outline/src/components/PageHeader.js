import { Component } from "react";

class PageHeader extends Component {
    render() {
        let { title, subtitle } = this.props
        return (
            <div class="block">
                <div className="App Header">

                    <section class="hero is-primary is-bold">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title">
                                    {title}
                                </h1>
                                <h2 class="subtitle">
                                    {subtitle}
                                </h2>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}

export default PageHeader;