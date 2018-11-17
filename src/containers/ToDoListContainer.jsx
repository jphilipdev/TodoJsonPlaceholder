import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import updateTodos from '../store/reducers/todoReducers';

const mapStateToProps = state => ({
   todos: state.todos 
});

export default connect(mapStateToProps, { updateTodos })(ToDoList);