import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home/Home'
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddServicess from "./components/Dashboard/AddServicess/AddServicess";
import BuyService from "./components/Dashboard/BuyService/BuyService";
import ServiceList from "./components/Dashboard/ServiceList/ServiceList";
import UserReview from "./components/Dashboard/UserReview/UserReview";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";
import AdminServiceList from "./components/Dashboard/AdminServiceList/AdminServiceList";
import AllServicess from "./components/Dashboard/AllServicess/AllServicess";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<PrivateRoute exact path="/dashboard">
						<Dashboard/>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/addservices">
						<AddServicess/>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/buyservice/:id">
						<BuyService/>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/myservicelist">
						<ServiceList/>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/userreview">
						<UserReview/>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/Admin">
						<AddAdmin/>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/Adminservicelist">
						<AdminServiceList/>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/AllServices">
						<AllServicess/>
					</PrivateRoute>
					<Route exact path="/login">
						<Login/>
					</Route>
				</Switch>
			</div>
		</Router>
		</UserContext.Provider>
	);
}

export default App;
