import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
    const {isAuthenticated, children} = props;

    return isAuthenticated ? children : <Navigate to="/login"/>
}

const mapStateToProps = (state)=>{
    return{
        isAuthenticated: state.isAuthenticated,
    }
}

export default connect(mapStateToProps, null)(ProtectedRoute)
