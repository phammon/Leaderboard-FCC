import React from 'react';
import Table from './table/table'; 
import Title from './title/title';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state={
		    data: []
		};
    }
	componentDidMount() {
		fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then((response) => {//handle response
				//convert to json
					return response.json();
				}).then((obj) => {
					obj.map(i => i.id = obj.indexOf(i));
					obj.map(i => i.id = i.id + 1);
					this.setState({data: obj});
					
	})}
  render() {
  	const {data} = this.state;
    return (
    	<div>
	    	<Title />
	        <Table columns= {[{
		        Header: '#',
		        accessor: 'id',
		      }, {
		        Header: 'Camper Name',
		        accessor: 'username',
		      }, {
		        Header: 'Points in the past 30 days',
		        accessor: 'recent',
		      }, {
		        Header: 'All Time Points',
		        accessor: 'alltime'
		      }]} data={data}/>
        </div>
    );
  }
}
