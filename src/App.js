import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./styles.css"

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  addTask = (name) => {
    if (name !== "" && name !== undefined) {
      const newTask = {
        task: name,
        id: Date.now(),
        completed: false,
      };
      this.setState({
        tasks: [...this.state.tasks, newTask],
      });
    }
  }

  toggleCompleted = (taskID) => {
    let completedTasks = this.state.tasks;
    console.log(completedTasks);
    completedTasks.forEach((element, index) => {
      if (element.id === taskID) {
        if (element.completed === true) {
          element.completed = false;
        }
        else {
          element.completed = true;
        }
      }
    })
    this.setState({
      tasks: completedTasks,
    })
  }

  clearCompleted = () => {
    let removedTasks = this.state.tasks;
    console.log(removedTasks);

    for (let index = removedTasks.length - 1; index >= 0; index--) {
      const element = removedTasks[index];

      if (element.completed === true) {
        removedTasks.splice(index, 1);
      }
    }
    this.setState({
      tasks: removedTasks,
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
        <TodoList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
