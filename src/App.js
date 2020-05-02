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
//import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			organizationConfig: null,
			definitionList: null,
			definitionLink: "https://petstore.swagger.io/v2/swagger.json"
		}
		this.swaggerhub = this.swaggerhub.bind(this)
		this.getOrganizationData = this.getOrganizationData.bind(this)
		this.updateDefinitionLink =this.updateDefinitionLink.bind(this);
	}

	componentWillMount() {
		this.setState({
			organizationConfig:  Config.orgData,
		})
	}

	updateDefinitionLink(newLink) {
		this.setState({
			definitionLink: newLink
		})
	}





	componentDidUpdate() {
		SwaggerUI({
			domNode: document.getElementById("api-data"),
			url: this.state.definitionLink
		})
	}

	render() {
		return (
			<div>
				<Banner
					title={"API Catalog"}
					description={"Explore our APIs and see sample responses without writing a single line of code"}
				/>
				<ApiItem />
				<ApiItem />
				<ApiItem />
				<ApiItem />
				<div class="head">
					<h1 class="auto">API Catalog</h1>
					<p class="auto"><em>Explore our APIs and see sample responses without writing a single line of code</em></p>
				</div>
				<div className="App">

					<Sidebar
						organizationConfig={this.state.organizationConfig}
						definitionList={this.state.definitionList}
						updateDefinitionLink={this.updateDefinitionLink}
						getOrganizationData={this.getOrganizationData}
					/>
					<div id="api-data" />
				</div>
			</div>
		);
	}

	swaggerhub(inputMethod, inputResource, inputParams) {
		let url = ""
		if (inputParams) {
			url = "https://raw.githubusercontent.com/leorone14/oas-doc-portal/master/config/" + inputResource //+ "?" + inputParams
		} else {
			url = "https://raw.githubusercontent.com/leorone14/oas-doc-portal/master/config/" + inputResource
		}
		//url="http://localhost:3000/api/portal/v1.3/discovery/apis";
		var myHeaders = new Headers();
		//  myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Authorization", "Basic Yjc0MzlfYXBpYWRtaW46YmdsYjc0Mzk=");
		myHeaders.append("Access-Control-Allow","*");

		var myInit = { method: 'GET',
			headers: myHeaders,
			mode: 'cors',
			cache: 'default' };

		//headers
		return fetch(url, {
			method: inputMethod,
			headers: {
				//  myHeaders
			}
		}).then(response => {
			if (response.ok) {
				return response.json()
			} throw new Error('There was an issue requesting the API')
		}).then(json => {
			return json
		})
	}
	getOrganizationData(organization) {
		let inputParams = "page=0&limit=20&sort=NAME&order=ASC"
		let inputResource = organization;

		this.swaggerhub('GET', inputResource, inputParams).then(response => {
			this.setState({
				definitionList: response
			})
		})
	}


}

export default App;
