import React, { Component } from 'react'
import Todos from './Todos'
import { connect } from 'react-redux'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)

    this.state = {
      task: ""
    }
  }
  handleChange(e) {
    this.setState({
        [e.target.name]:  e.target.value
      })
  }
  updateTodo (id ) {
    debugger
    this.props.dispatch ({
      type: "UPDATE_TODO",
      id,
      task: this.state.task
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch({
      type: "ADD_TODO",
      task: this.state.task
    })
    e.target.reset()
  }

  removeTodo (id, e){
    debugger
    this.props.dispatch({
      type: "REMOVE_TODO",
        id
    })
  }

  render () {

    let todos = this.props.todos.map((val, index) => (
      <Todos updateTodo = {this.updateTodo.bind(this,val.id, val.task)}
             removeTodo = {this.removeTodo.bind(this, val.id)}
             handleChange = {this.handleChange}
             task={val.task}
             id={val.id}
             key = {index} />
    ))

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="task"></label>
          <input
            type="text"
            name="task"
            id="task"
            onChange={this.handleChange}/>
          <button>Add a Todo</button>
        </form>
        <div>
          <ul>{todos}</ul>
        </div>
      </div>
    )

  }


}
function mapStateToProps(reduxState) {

  return {
    todos: reduxState.todos
  }
}
export default connect (mapStateToProps)(TodoList)