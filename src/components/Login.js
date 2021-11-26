import React,{useState} from 'react'
import { startUserLogin } from '../Actions/userAction'
import { useDispatch } from 'react-redux'
import validator from 'validator'
import {Typography, Paper, TextField,Button, Grid } from '@material-ui/core'

const Login = (props) => {
    const paperStyle = { padding: 20, height: '70%', width: 400, margin: '20px auto' }
    const dispatch = useDispatch()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    
    const handelInput = (e) => {
        const attr = e.target.name
        if (attr === 'email') {
            setEmail(e.target.value)
        } else if (attr === 'password') {
            setPassword(e.target.value)
        }
    }

    const runValidation = () => {
        if (email.trim().length === 0) {
            errors.email='email cannot be blank'
        } else if (!validator.isEmail(email)) {
            errors.email='invalid email'
        }

    }
    const handelSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                email: email,
                password:password
            }
            dispatch(startUserLogin(formData,props))
            console.log(formData)
        } else {
            setFormErrors(errors)
        }
        
    }
    return (
        <Grid>
            <Paper  style={paperStyle}>
            <Typography variant='h6' style={{marginBottom:'0.4rem',fontWeight:600,marginLeft:'6rem'}}>Login</Typography>
            <form onSubmit={ handelSubmit} style={{marginLeft:'2rem'}}>
                <TextField type='text' value={email} onChange={handelInput}
                name='email' label='enter Email' style={{width:'90%'}} /><br />
                {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}<br />
                
                <TextField type='password' value={password} onChange={handelInput}
                name='password' label='enter Password' style={{width:'90%'}} /><br /><br/>
                
                <Button variant='contained' size='small' color='primary' type='submit'>Login</Button>
            </form>
            </Paper>
        </Grid>
    )
}
export default Login