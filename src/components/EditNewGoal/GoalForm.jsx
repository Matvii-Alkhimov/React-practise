import { Component } from "react"

export class GoalForm extends Component {

    state = {
        goal: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addToDo(event.currentTarget.elements.goal.value);
        this.setState({goal: ''})
    }

    onTextareaClick = (event) => {
        this.setState({
            goal: event.currentTarget.value
        })
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <textarea name="goal" value={this.state.goal} onChange={this.onTextareaClick} ></textarea>
                <button type="submit">Create</button>
            </form>
        )
    }
    
}