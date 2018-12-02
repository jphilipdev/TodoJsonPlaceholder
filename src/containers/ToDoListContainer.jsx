import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import { loadTodos, todoSelected } from '../store/actions/todoActions';

const mapStateToProps = state => ({
   todos: state.todos.todos,
   todo: state.todos.todo
});

const mapDispatchToProps = { 
   loadTodos, 
   todoSelected 
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ToDoList);