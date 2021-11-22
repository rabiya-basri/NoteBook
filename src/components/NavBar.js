import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import '../style.css'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import MyNotesContainer from './MyNotesContainer'
import { Toolbar, Typography } from '@material-ui/core'

const NavBar = (props) => {
    const { isLoggedIn, handelAuth } = props
    
    return (
        <>
            <Toolbar className='nav-bar'>
                <Typography variant='h4' className='nav-bar-title'>NoteBook</Typography>
                <>
                <Link className='navBarLink' to='/'>Home</Link>
                {isLoggedIn ? (
                    <>
                    <Link to='/account' className='navBarLink'>Account</Link>
                    <Link to='/mynotes' className='navBarLink'>MyNotes</Link>
                     <Link className='navBarLink' onClick={(e) => {
                                e.preventDefault()
                                localStorage.removeItem('token')
                                console.log('successfully log out')
                                handelAuth()
                                props.history.push('/')
                            }}>Logout</Link>   
                    </>
                ) : (
                    <>
                        <Link to='/register' className='navBarLink'>Register</Link>
                        <Link to='/login' className='navBarLink'>Login</Link>
                    </>
                )}</>
            </Toolbar>

            <Route path='/' component={Home} exact={true} />
            <Route path='/register' component={Register} />
            <Route path='/login' render={(props)=>{
                return (
                    <Login {...props}
                    handelAuth={handelAuth} />
                )
                }}
                 />
            <Route path='/account' component={Account} />
            <Route path='/mynotes' component={MyNotesContainer}/>
        </>
    )
}
export default withRouter(NavBar)