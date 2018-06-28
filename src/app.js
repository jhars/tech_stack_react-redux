import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';


const App = () => {
  // under styles => two sets of curly-braces {{}}
  // OUter for JSX
  // Inner for designate Javascript object
  return (
    <Provider store={createStore(reducers)}>

      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
