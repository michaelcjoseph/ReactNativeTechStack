import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;

    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </CardSection>
    );
  }
}

ListItem.propTypes = {
  library: React.PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
