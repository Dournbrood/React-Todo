import React, { Component } from "react";

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {};
    }

    handleChanges = e => {
        this.setState({
            task: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ""
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChanges}
                    />
                    <button type="submit">Add Todo</button>
                    <button type="button" onClick={this.props.clearCompleted}>Clear Completed</button>
                </form>
            </>
        );
    }
}

export default TodoForm;