import { connect } from 'react-redux';
import { List } from './List';

import { 
  postCompleteHabit
  } from '../helper/requests';

const mapStateToProps = state => {
  return {
      loaded: state.loaded,
      habits: state.habits,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    completeHabit: (habitId) => postCompleteHabit(habitId, dispatch)
  };
};

export const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps)
  (List);