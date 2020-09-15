import React,{useState, Fragment, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Lateral from './components/Lateral';
import Post from './components/Post';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";

import './App.css';


const App = ()=>{

        const [blog, setBlog] = useState('');

        useEffect(()=>{
                getData();
        },[]);

        const getData = ()=>{
                let url = "https://jsonplaceholder.typicode.com/posts";
                axios.get(url).then(res => res.data).then((data)=>{
                        setBlog(data);
                }).catch((error) => {
                        console.log(error);
                });
        }


        return(
                <Fragment>
                        <Router>
                                <Header />
                                <Switch>
                                        <Route path="/blog">
                                                <div className="main">
                                                        <Lateral />
                                                        <Post data={blog}/>
                                                </div>
                                        </Route>
                                        <Route path="/search">
                                                <div className="main">
                                                        <Lateral />
                                                </div>
                                        </Route>
                                        <Route path="/">
                                                <div className="main">
                                                        <Lateral />
                                                </div>
                                        </Route>
                                </Switch>
                        </Router>
                </Fragment>
                );
}

export default App;
