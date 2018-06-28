import React, { Component } from 'react';
import { Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
// * lets us inport ALL exports from actions/index.js

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    // const { library, selectedLibraryId } = this.props;
    const { library, expanded } = this.props;

    // if (library.id === selectedLibraryId) {
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>

      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    // console.log(this.props);
    // At this point in time we now hve access to our
    // Action Creator selectLibrary inside of our compoenent
    // we just need to CALL it with the specific ID of the library (tech stack) we want to show

    // now we nee to handle an 'onPress' event -- import touchable component
    // "touchableWithoutFeedback"
    // hookup onPress  Handler
    // passed as prop, how we register a 'callback'

    //for {title} below: we deconsctructed above so instead of:
    // {this.props.library.title}
    // we can now use just {title}
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// const mapStateToProps = (state) => {
// ownProps object is EXACTLY equal to 'this.props' inside  of the componenet(ListItem)
//idea is to remove logic from componenets entirely
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
  // return { selectedLibraryId: state.selectedLibraryId };
};

// EXPLANATION: const ## mapStateToProps ## = (state, ownProps) => {
// ###########################
// ### REDUX IN A NUTSHELL ###
// ###########################

//MSTP IS OUR ABILITY O INTERFACE FROM THE APPLICATION LEVEL STATE,
//DOWN TO THE COMPONENET LEVEL
//PLUCK STATE OFF OF OUR STATE OBJECT AND INJECT FROM IN TO OUR componenets

// 1 MORE THING

// WHENEEVER OUR APPLIVATION STATE CHANGES OUR
// MSTP FUNCITON WILL RERUN PASS IN A NEW SET OF PROPS TO OUR COMPONENET
// WHICH CASUSES OUR COMPONENENT TO RERENDER

//THAT WHY WHEN WE CLICK ON BUTTON
// OUR APPLICATION DOES RE-render
//WHENEVER WE CALL AN ACTION CREATOR THAT
//DISCPATCHES OUR ACITON

//REUCER IS RERUN, STATE RECALCULATED FLOWS INTO mapStateToProps
//NEW PROPS SHOW UP INSIDE COMPONENT
// AND OUR ENTIRE APPLICATION WILL RE-RENDER



// export default ListItem;
// we don't have to call 'dispatch' -- 'connect()' does this for us
// export default connect(null, actions)(ListItem);
export default connect(mapStateToProps, actions)(ListItem);
