import React from 'react'
import { connect } from 'react-redux'
import {Route, Navigate } from 'react-router-dom';

function ProtectedRegister(props) {
    const {isAuthenticated, userCredentials, children} = props;

    return !isAuthenticated ? children : <Navigate to={`/createparcel/?email=${userCredentials.email}`}/> 
}

const mapStateToProps = (state)=>{
    return {
        isAuthenticated: state.isAuthenticated,
        userCredentials: state.userCredentials
    }
}

export default connect(mapStateToProps, null)(ProtectedRegister)
