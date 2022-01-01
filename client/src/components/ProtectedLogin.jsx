import React from 'react'
import { connect } from 'react-redux';
import {Route, Navigate } from 'react-router-dom';

function ProtectedLogin(props) {
    const {isAuthenticated, userCredentials, children} = props;

    return isAuthenticated ? <Navigate to={`/createparcel/?email=${userCredentials.email}`}/> : children  
}

const mapStateToProps = (state)=>{
    return{
        isAuthenticated: state.isAuthenticated,
        userCredentials: state.userCredentials
    }
}

export default connect(mapStateToProps, null)(ProtectedLogin)
