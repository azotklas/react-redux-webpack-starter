import { combineReducers } from 'redux';

import testReducer from './test_reducer';

const rootReducer = combineReducers({
  testDATA: testReducer,
});

export default rootReducer;