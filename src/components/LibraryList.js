import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);


// import React, { Component } from 'react';
// import { ListView } from 'react-native';
// import { connect } from 'react-redux';
// import ListItem from './ListItem';
//
// class LibraryList extends Component {
//
//   //Lifecycle Method
//   componentWillMount() {
//     // This code is 'as per (official) documentation'
//     const ds = new ListView.dataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });
//
//     // we only have access to 'this.props.libraries'
//     // b/c of mapStateToProps
//     this.dataSource = ds.cloneWithRows(this.props.libraries);
//     // this.dataSource = ds.cloneWithRows(this.props.libraries);
//   }
//
//   renderRow(library) {
//     //needs to return a single library...
//     // 'libary' (as prop) is arbitrary name
//     return <ListItem library={library} />;
//   }
//
//   render() {
//     //this comes from 'Provider' -> mapStateToprops -> props
//     // console.log(this.props);
//     // return;
//     return (
//         <ListView
//           dataSource={this.dataSource}
//           renderRow={this.renderRow}
//         />
//     );
//
//   }
// }
//
// // Take properties off of state and provide them as 'props'
// // to our component LibraryList
// const mapStateToProps = state => {
//   // console.log(state);
//   //if i return an object here
//   // the object will return as 'props' to LibraryList
//   // ' libraries' (key) HERE is arbitrary
//   return { libraries: state.libraries };
// };
//
// // export default LibraryList;
// // {connect} helper forhges a CONNECTION bewtween
// // React portion of App & Redux portion of app
// export default connect(mapStateToProps)(LibraryList);
