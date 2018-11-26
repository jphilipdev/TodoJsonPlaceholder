import { connect } from 'react-redux';
import ToDoManager from '../components/ToDoManager';

const mapStateToProps = state => ({
    todo: state.todos.todo
});

export default connect(
    mapStateToProps
)(ToDoManager);