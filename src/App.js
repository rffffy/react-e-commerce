import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";

// const HatsPage = () => <h1>Hats Page</h1>;

class App extends Component {
	render() {
		return (
			<div>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
			</div>
		);
	}
}

export default App;
