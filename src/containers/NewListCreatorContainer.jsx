import { connect } from 'react-redux';
import NewListCreator from '../components/NewListCreator';
import { addTodo } from '../store/actions/todoActions';

export default connect(
    null,
    { addTodo }
)(NewListCreator);
