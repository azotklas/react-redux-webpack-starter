
import React, { Component } from 'react';
import SearchContainer from '../containers/SearchContainer'
import ResultContainer from '../containers/ResultContainer'
import '../styles/Root.css';

const Root = ({}) => (
    <div id='container'>
       <h1>test text</h1>
       <SearchContainer />
       <ResultContainer />
    </div>
)
export default Root