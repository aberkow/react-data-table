import React, { Component } from 'react';
import Griddle from 'griddle-react';

const mockData = require('../mock_data.json');

export default class GriddleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mockData: mockData
    }
  }
  render() {
    return (
      <Griddle results={this.state.mockData} />
    );
  }
};
