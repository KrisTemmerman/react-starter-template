import React from 'react';
import NavBar from './components/NavBar';

import '!style!css!sass!../scss/main.scss'
export default class App extends React.Component {
    render(){
        return(
            <div>
                <NavBar/>
            </div>
        )
    }
}