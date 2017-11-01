import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

export default class Table extends React.Component {

      render() {
        return (
        <ReactTable
         className={'-striped -highlight'} columns={this.props.columns} data={this.props.data} />
    )
  }
}