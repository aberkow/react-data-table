import React, { Component } from 'react';

import { Table, Column, Cell } from 'fixed-data-table';

const mockData = require('../mock_data.json');

// console.log(mockData);

// import FakeObjectDataStore from '../js/fakeData';

// need to figure this out.
// require('../node_modules/fixed-data-table/dist/fixed-data-table.min.css');
// require('../node_modules/fixed-data-table/dist/fixed-data-table-base.css');
// require('../node_modules/fixed-data-table/dist/fixed-data-table-style.css');





export default class ResultsTable extends Component {
  constructor(props) {

    super(props);
    this.state = {
      myTableData: [
        {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'},
        {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com'},
        {name: 'Estevan', email: 'Aimee7@hotmail.com'},
        {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com'},
        {name: 'Tressa', email: 'Yadira1@hotmail.com'},
      ],
      mockData: mockData
    }
  }
  // componentDidMount() {
  //   console.log(this.state.mockData, 'from this.state');
  // }
  render() {
    return (
        <Table
          rowsCount={this.state.mockData.length}
          rowHeight={50}
          headerHeight={50}
          width={1000}
          height={500} >
          {/* <Column
            header={<Cell>First Name</Cell>}
            cell={props => (
              <Cell {...props}>
                {this.state.myTableData[props.rowIndex].name}
              </Cell>
            )}
            width={200}
          /> */}
          <Column
            header={<Cell>Last Name</Cell>}
            cell={ (...props) => (
              <Cell
                width={props.width}
                height={props.height}
                className="table__cell"
              >
                {this.state.mockData[props.rowIndex]}
                
              </Cell>
            )}
            width={200}
          />
          {/* <Column
            header={<Cell>Last Name</Cell>}
            cell={ (width, height, rowIndex) => (
              <Cell
                width={100}
                height={50}
                className="table__cell"
              >
                {this.state.mockData.last_name}
              </Cell>

            )}
          /> */}
        </Table>
    );
  }
};



/*

// const fakeData = new FakeObjectDataStore(10);
// console.log(fakeData, 'fakeData');
//
// const test = fakeData.createFakeRowObjectData(0);
// console.log(test);

// class TextCell extends Component {
//   render() {
//     const { rowIndex, field, data, ...props } = this.props;
//
//     return (
//       <Cell {...props}>
//         {data[rowIndex][field]}
//       </Cell>
//     );
//   }
// };
//
// class LinkCell extends Component {
//   render() {
//     const { rowIndex, field, data, ...props } = this.props;
//     const link = data[rowIndex][field];
//     return (
//       <Cell {...props}>
//         <a href={link}>{link}</a>
//       </Cell>
//     );
//   }
// };




<Table
  rowsCount={this.state.myTableData.length}
  rowHeight={50}
  headerHeight={50}
  width={1000}
  height={500} >

</Table>



<Table
    rowsCount={this.state.myTableData.length}
    rowHeight={50}
    width={1000}
    height={500} />
    <Column
      header={<Cell>Name</Cell>}
      cell={props => (
        <Cell {...props}>
          {this.state.myTableData[props.rowIndex].name}
        </Cell>
      )}
      width={200}
    />
</Table> */
