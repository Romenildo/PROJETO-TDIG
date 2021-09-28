
import Login from '../paginas/login'
import Register from '../paginas/register'
import Home from '../paginas/home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Routes = () => (
    <>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>

                <Route path="/register">  
                    <Register />
                </Route>
                <Route path="/home">  
                    <Home />
                </Route>

                <Route path="*">
                    <h1>404 - Component Not Found</h1>
                    <a href="/">Return Home</a>
                </Route>
            </Switch>
        </Router>
    </>
)

export default Routes