import { CheckCircleRounded, Delete } from '@material-ui/icons';

function Todo(props) {
    return (
      <div className="todo_wrapper">
        <div className="todo_header">{props.todo.name}</div>
        <div className="todo_details">{props.todo.details}</div>
        <div className="todo_actions">
          <div className="i_size">
            <CheckCircleRounded fontSize="small"></CheckCircleRounded>
          </div>
          <div className="i_size">
            <Delete fontSize="small"></Delete>
          </div>
        </div>
      </div>
    );
  }
  
  export default Todo;
  