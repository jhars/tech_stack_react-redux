// export default () => {
// export default (state, action) => {
//i this argument here is undefeinied -- we should default to vaule of null
export default (state = null, action) => {
  console.log(action);

  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
  //this initial value CANNOT be UNDEFINED
};
