import {
  List,
  ListItem,
  // ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import './Todo.css';

const Todo = ({ todo, timestamp }) => {
  return (
    <List className="todo__list">
      <ListItem>
        {/* <ListItemAvatar></ListItemAvatar> */}
        <ListItemText primary={todo} secondary={'todo'} />
      </ListItem>
    </List>
  );
};

export default Todo;
