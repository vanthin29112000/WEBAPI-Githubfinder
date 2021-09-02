import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Containers/Home';
import About from './Containers/About';
import NavBar from './Layouts/NavBar';
import UserDetail from './Containers/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <div className ="container">
        <Switch>
          <Route path = "/" component = {Home} exact></Route>
          <Route path = "/About" component = {About}></Route>
          <Route path = "/User/:login" component = {UserDetail}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;