import React, { Component } from 'react';
import './App.css'
import SwaggerUI from 'swagger-ui';
import Config from './organization_config.json';
import Sidebar from './Sidebar.js'
import '../node_modules/swagger-ui/dist/swagger-ui.css';
import Banner from "./Banner";
import ApiItem from "./ApiItem";
//import './bootstrap_002.css';
//import './template.css';
import axios from 'axios';


const ApiList = (props) => (

	//{props.ApiItems.map(profile => <Card key={profile.id} {...profile}/>)}
	<div>
		{console.log(props)}
	</div>
);



const ApiItems= async () => {
	//const resp =await fetch('https://raw.githubusercontent.com/leorone14/oas-doc-portal/master/config/apiList.json');
	const resp2 = await axios.get('https://raw.githubusercontent.com/leorone14/oas-doc-portal/master/config/apiList.json');
	//const data = await resp2.json();


	let listOfApis= [];

	for(let i=0; i<resp2.data.length; i++){
		let apiId= resp2.data[i].id;
		try{
			const apiDef=await axios.get(`https://raw.githubusercontent.com/leorone14/oas-doc-portal/master/config/${apiId}.json`);
			console.log(apiDef);
			listOfApis = [...listOfApis,resp2.data[i] ];
		}catch(error)
		{}

		console.log(listOfApis.length);
	}
	console.log(listOfApis)


	return(
		listOfApis
	);

};



class FleApp extends Component {

	state = {
		profiles: ApiItems(),
	};

	componentDidMount() {
		this.setState(this.state.profiles,ApiItems);
		console.log("--------------------------------------------------------")
	}

	render() {
		return (
			<div>
				<Banner
					title={this.props.title}
					description={"Explore our APIs and see sample responses without writing a single line of code"}
				/>
				<ApiList apiListFle={this.state.profiles} />
			</div>


		);
	}

}

export default FleApp;
