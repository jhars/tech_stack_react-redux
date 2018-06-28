import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { View } from 'react-native';

class LibraryList extends Component {
  render() {
    //this comes from 'Provider' -> mapStateToprops -> props
    console.log(this.props);
    return;
  }
}

// Take properties off of state and provide them as 'props'
// to our component LibraryList
const mapStateToProps = state => {
  // console.log(state);
  //if i return an object here
  // the object will return as 'props' to LibraryList
  // ' libraries' (key) HERE is arbitrary
  return { libraries: state.libraries };
};

// export default LibraryList;
// {connect} helper forhges a CONNECTION bewtween
// React portion of App & Redux portion of app
export default connect(mapStateToProps)(LibraryList);
