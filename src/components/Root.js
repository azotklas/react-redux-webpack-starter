
import React, { Component } from 'react';
import SearchContainer from '../containers/SearchContainer'
import ResultContainer from '../containers/ResultContainer'
// Import React-JSS
import injectSheet from 'react-jss';
import '../styles/Root.css';

const styles = {
    wrapper: {
        backgroundColor: '#fafafa',
        padding: '60px 0',
    },
};

class Root extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return (
            <div id='container' className={classes.wrapper}>
                <h1>test text</h1>
                <SearchContainer />
                <ResultContainer />
            </div>
        )
    }
}

export default injectSheet(styles)(Root) 