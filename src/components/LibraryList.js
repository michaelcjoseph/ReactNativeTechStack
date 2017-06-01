import React, { Component, PropTypes } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
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

LibraryList.propTypes = {
  libraries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  libraries: state.libraries,
});


export default connect(mapStateToProps)(LibraryList);
