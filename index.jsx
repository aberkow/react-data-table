import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// import store from './js/store';

// import ResultsTable from './components/ResultsTable';

import GriddleTable from './components/GriddleTable';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

      </div>
    );
  }
};

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('app'));
});

// <ResultsTable />
