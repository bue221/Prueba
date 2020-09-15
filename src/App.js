import React,{useState, Fragment, useEffect } from 'react';
import Header from './components/Header';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";



const App = ()=>{

        const [value, setValue] = useState('');

        return(
                <Fragment>
                        <Router>
                                <Switch>
                                        <Route path='/'>
                                                <Header />
                                        </Route>
                                        <Route path='/search'>

                                        </Route>
                                </Switch>
                        </Router>
                </Fragment>
                );
}

export default App;
