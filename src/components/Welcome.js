import React from 'react' ;
import { Component } from 'react';

class Welcome extends Component {
    render(){
        return(
            React.createElement('h1', null, 'Welcome to React UI Component Development')
        );
    }
}

export default Welcome;