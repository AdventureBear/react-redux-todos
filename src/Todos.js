import React, { Component } from 'react'

class  Todo extends Component {
  constructor (props){
    super(props)
    this.state = {
      isEditing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  toggleEdit () {
    this.setState((prevState) => {
     return {isEditing: !prevState.isEditing}
    })
  }

  handleChange(e) {
    this.props.handleChange(e)
  }

  updateTodo(e) {
    this.toggleEdit()
    this.props.updateTodo(this.props.id)
  }
 render (){

   const isEditing = this.state.isEditing;


   if (isEditing) {
     return this.renderEdit()
   } else {
    return this.renderDisplay()
   }

 }

renderEdit () {
  return (
    <li>
      <form onSubmit={this.updateTodo.bind(this.props.id)}>
        <input type="text"
             name = "task"
             defaultValue={this.props.task}
             onChange={this.handleChange} />
        <button type="submit">Update</button>
      </form>
      <button onClick={this.props.removeTodo}>X</button>
      {/*<button onClick={this.updateTodo.bind(this.props.id, this.props.task)}>UPDATE</button>*/}
    </li>
  )
}
renderDisplay () {
  return (
    <li>
      {this.props.task}
      <button onClick={this.props.removeTodo}>X</button>
      <button onClick={this.toggleEdit}>EDIT</button>
    </li>
  )
}

}
export default Todo