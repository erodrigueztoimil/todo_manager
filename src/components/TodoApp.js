import React, {Component} from 'react';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
  render() {
    return (
      <div className='TodoApp'>
        <h2>TODO</h2>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add a new todo.
          </label>
          <input type='text' value={this.state.text} onChange={this.handleChange}/>
          <button>
            add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
