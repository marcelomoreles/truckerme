import React from 'react'
import { Redirect } from 'react-router-dom'


const SignOut = props => {
    
    localStorage.removeItem('isLogged');
    return <Redirect to="/sign-in" />
    
}

export default SignOut