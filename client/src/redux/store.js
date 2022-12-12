import { combineReducers, configureStore } from "@reduxjs/toolkit";

/** call reducers */

import { resultReducer } from './result_reducer';
import { questionReducer } from './question_reducer';


const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

/** create store with reducer */
export default configureStore({ reducer: rootReducer });
