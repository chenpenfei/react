import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import List from './components/List'

function App(props) {
    console.log(props);
    return(
        <div>
            <Header {...props}></Header>
            <List {...props}></List>
        </div>
    )
}

export default App;
