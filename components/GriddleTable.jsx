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
      <Griddle
        results={this.state.mockData}
        tableClassName="table"
        showFilter={true}
        showSettings={true}
        columns={ ['first_name', 'last_name', 'affiliation', 'subject']} enableInfiniteScroll={true}
        useFixedHeader={true}
        bodyHeight={400}
        // useGriddleStyles={false}
      />
    );
  }
};
