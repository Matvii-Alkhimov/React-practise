import { Component } from "react"

export class Filter extends Component {
    state = {
        filter: ""
    }

    render() {
        return(
            <>
                <label htmlFor="search">Filter by the name</label>
                <input type="text" id="search" name="search" value={this.state.filter} />
            </>
        )
    }
}