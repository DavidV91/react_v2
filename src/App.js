import React from 'react';
import './App.css';
import About from './About/About';
import Home from './Home/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class NotFound extends React.Component{
  render(){
      return <h2>Ресурс не найден</h2>;
  }
}



class Navbar extends React.Component{
  render(){
    return (
     

      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <Link to="/" class="nav-item nav-link text-light" >Home</Link>
      <Link to="/about" class="nav-item nav-link text-light" >About</Link>
    
    </div>
  </div>
</nav>
      );
    
  }
}

class ProductsList extends React.Component{
  render(){
      return <h2>Список товаров</h2>;
  }
}
class Product extends React.Component{
  render(){
      const prodId = this.props.match.params.id;
      return <h2>Товар № {prodId}</h2>;
  }
}

class Products extends React.Component{
  render(){
      return <div>
                  <Switch>
                      <Route exact path="/products" component={ProductsList} />
                      <Route path="/products/:id" component={Product} />
                  </Switch>
              </div>
  }
}


function App() {
  return <div>
  <Router>
    <Navbar />
    <Route exact path="/" component={Home} />
   
    <Route  path="/about/:id?/:name?" component={About} />
    
    <Route path="/products" component={Products} />
   

  </Router>
<div className="foot">
  <p>&#169; 1996-2020 ComponentSource®. All rights reserved.</p>
  </div>
</div> 
}

export default App;
