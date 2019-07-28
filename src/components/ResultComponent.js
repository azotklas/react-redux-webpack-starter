import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// Import React-JSS
import injectSheet from 'react-jss';
import '../styles/Root.css';

const styles = {
    wrapper: {
        backgroundColor: '#fafafa',
        padding: '60px 0',
    },
};

class ResultComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return (
            <div id='container' className={classes.wrapper}>
                <Button variant="contained" color="primary">
                    ResultComponent
                </Button>
            </div>
        )
    }
}

export default injectSheet(styles)(ResultComponent) 