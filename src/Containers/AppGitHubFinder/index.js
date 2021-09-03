import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../Home';
import UserDetail from '../UserDetail';
import Search from '../Search';
import About from '../About';
import NavBar from '../../Layouts/NavBar';

export default class GitHubFinder extends Component {
    constructor(props){
        super(props);

        this.state ={
            search : "",
        }
    }

    onSearchChangeState = (search)=>{
        this.setState({
            search : search,
        })
    }

    render() {
        return (
            <BrowserRouter>
                <NavBar></NavBar>
                <div className="container">
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/Search"><Search onSearchChangeState = {this.onSearchChangeState} search = {this.state.search}></Search></Route>
                        <Route path="/About" component={About}></Route>
                        <Route path="/User/:login" component={UserDetail}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
