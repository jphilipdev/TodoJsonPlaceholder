import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import { loadTodos } from '../store/actions/todoActions';

const mapStateToProps = state => ({
   todos: state.todos.todos
});

export default connect(
   mapStateToProps,
   { loadTodos }
)(ToDoList);