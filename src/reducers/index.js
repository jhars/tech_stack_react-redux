import { combineReducers } from 'redux';
import SelectionReducer from './SelectionReducer';
import LibraryReducer from './LibraryReducer';

// whatver 'key' you provide here is how the property
// will show up on my state object
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

// console.log(store.getState());
// { libraries: [] }

// console.log(store.getState());
// { libraries: [{id: 1 , title: ..., description: ...}] }
