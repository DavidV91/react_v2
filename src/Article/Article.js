import React from 'react';
import a from './Article.module.css'
import {BrowserRouter as Router, Route, Switch ,NavLink} from "react-router-dom";


function Home() {
return <div>Home</div>
}
function About() {
    return <div>About</div>
}
function Message() {
    return <div>Message</div>
}

function Article(){
    return <div className={a.article}>


        <Router>

            <Switch>

                <Route path="/Home" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Message" component={Message} />

            </Switch>

        </Router>


        </div>
}



export default Article ;