import data from './LibraryList.json';

// Design our reducers in a way that assumes:
// we will call reducer again and again & again

//when redux app 1st boots up, it will automtacally run
// all registered reducers to accumulate some amount of initial state

// We need to respons with some amount of initial state...
// when we go back and implement SelectionReducer, we will revisit this ^
export default () => data;
