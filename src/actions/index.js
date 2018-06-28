export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};

// object with 'type' property is an action
// an action is how we cause our reducers to update the data that they produce
// the action is wrapped by a function called an action-creator(expot const selectLibrary)

// if you want to export many things,
//i just use export,
//NOT default
