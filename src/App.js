import './App.css';
import Todo from './component/todo.component';
import Nav from './component/nav.component';
import SearchBar from './component/searchbar.component';
import { AddCircle } from '@material-ui/icons';
import { Dialog, Button, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false, t_name: '', t_detail: '',
      todos :[
        {
          id: 1,
          name: 'todo name',
          details: 'todo details',
          isCompleted: false,
          isInprogres: false,
        },
        {
          id: 2,
          name: 'todo name',
          details: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          isCompleted: false,
          isInprogres: false,
        }
      ],
    
       todosInProgress: [
        {
          id: 1,
          name: 'Just Show Off',
          details: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          isCompleted: false,
          isInprogres: false,
        },
        {
          id: 2,
          name: 'Create a Template App',
          details: 'accepts all the same values as the longhand version, including span simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          isCompleted: false,
          isInprogres: false,
        },
        {
          id: 3,
          name: 'todo name',
          details: 'Note that a line can have more than one name. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          isCompleted: false,
          isInprogres: false,
        }
      ]
    }
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange_two = this.handleChange_two.bind(this)
    this.handleChange_one = this.handleChange_one.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleClickOpen(){
    this.setState({open: true})
  };

   handleClose(){
    this.setState({open: false})
  };

  handleSave(){
    var temp =  {
      id: Math.random(),
      name: this.state.t_name,
      details: this.state.t_detail,
      isCompleted: false,
      isInprogres: false
    }
    var tempTodo = this.state.todos
    tempTodo.push(temp)

    this.setState({
      todos: tempTodo
    })
    this.handleClose()
  }

   handleChange_one(event){
     this.setState({
       t_name :event.target.value
     })
    console.log(event.target.value)
  }

  handleChange_two(event){
    this.setState(
      {t_detail :event.target.value}
    )
    console.log(event.target.value)
  }


  render (){
    return (
    <div className="App">
      <Nav></Nav>
      <div className="container_wrapper">
        <SearchBar></SearchBar>
        <div className="todo_state">
        <div className="column_todo_state column_todo_one">
          <AddCircle onClick={this.handleClickOpen}></AddCircle>
          <span>all todos</span>
          <span>{this.state.todos.length}</span>
        </div>
        <div className="column_todo_state column_todo_two">
          <span>In Progress</span>
          <span>{this.state.todosInProgress.length}</span>
        </div>
        <div className="column_todo_state column_todo_three">
          <span>Completed</span>
          <span>{this.state.todos.length}</span>
        </div>
      </div>
      <div className="todo_display_gird">
        <div className="column_todo column_one">
          <ul>
            {
              this.state.todos.map((todo) => <li key={todo.id*Math.random()}><Todo todo={todo}></Todo></li>)
            }
          </ul>
        </div>
        <div className="column_todo column_two">
        <ul>
            {
              this.state.todosInProgress.map((todo) => <li key={todo.id*Math.random()}><Todo todo={todo}></Todo></li>)
            }
          </ul>
        </div>
        <div className="column_todo column_three">
        <ul>
            {
              this.state.todos.map((todo) => <li key={todo.id*Math.random()}><Todo todo={todo}></Todo></li>)
            }
          </ul>
        </div>
      </div>
      </div>
      <Dialog open={this.state.open} onClose={this.handleClose}>
        <DialogTitle>Nouveau TODO</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ajouter un Nouveau Todo
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="titre"
            type="text"
            fullWidth
            variant="standard"
            onChange={this.handleChange_two}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="details"
            type="text"
            fullWidth
            variant="standard"
            onChange={this.handleChange_two}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Anuller</Button>
          <Button onClick={this.handleSave}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </div>
  )}
}

export default App;
