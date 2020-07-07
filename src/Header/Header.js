import React from 'react';
import h from './Header.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";


function Home() {
    return <div>Home</div>
}
function About() {
    return <div>About</div>
}
function Message() {
    return <div>Message</div>
}



function Header(){
    return <div className={h.header}>


        <Router>

    <nav>


                        <NavLink to="/" activeClassName="active">Главная</NavLink>
                          <NavLink to="/about" activeClassName="active">О сайте</NavLink>
                         <NavLink to="/home" activeClassName="active">Товары</NavLink>


                    </nav>

            <Switch>

                <Route path="/Home" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Message" component={Message} />

            </Switch>

</Router>
        </div>
}



export default Header ;