import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.componenet";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.componenet";

// const HatsPage = () => <h1>Hats Page</h1>;

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
