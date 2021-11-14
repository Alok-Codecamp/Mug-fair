import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/HomePage/Home/Home';
import Dashboard from './pages/DashboardPage/Dashboard/Dashboard';
import Login from './pages/LoginPage/Login/Login';
import Products from './pages/MoreProducts/Products/Products';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './pages/LoginPage/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import BuyNow from './pages/BuyNow/BuyNow';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/moreProducts">
            <Products></Products>
          </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
        <Register></Register>
        </Route>
        <PrivateRoute path="/buynow/:id">
          <BuyNow></BuyNow>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
