import React,{useState} from 'react'
import Header from '../ReuseableComponent/Header'
import { startRegisterUser } from '../Actions/userAction'
import { useDispatch } from 'react-redux'
import { Button, Container, TextField } from '@material-ui/core'
import validator from 'validator';
import '../style.css'

const Register = (props) => {
    const dispatch = useDispatch()
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors={}

    const handelInput = (e) => {
        const attr = e.target.name
        if (attr === 'username') {
            setUsername(e.target.value)
        } else if (attr === 'email') {
            setEmail(e.target.value)
        } else if (attr === 'password') {
            setPassword(e.target.value)
        }
    }
    
    const runValidation = () => {
        if (username.trim().length === 0) {
            errors.username='username cannot be blank'
        }
        if (email.trim().length === 0) {
            errors.email='email cannot be blank'
        } else if (!validator.isEmail(email)) {
            errors.email='invalid email'
        }
        if (password.trim().length <= 8) {
            errors.password='password should have atleast 8 characters'
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                username: username,
                email: email,
                password:password
            }
            dispatch(startRegisterUser(formData,props))
            //console.log(formData)
        } else {
            setFormErrors(errors)
        }
        
    }
    return (
        <Container className='register-container'>
            <Header type='h1' text='Register' />
            <form onSubmit={ handelSubmit}>
                <TextField varient='standard' type='text' value={username} onChange={handelInput}
                 name='username' placeholder='Enter username' /><br />
                {formErrors.username && <span style={{color:'red'}}>{formErrors.username}</span>}<br/>
                
                <TextField variant='standard' type='text' value={email} onChange={handelInput}
                name='email' placeholder='Enter email' /><br />
                {formErrors.email && <span style={{color:'red'}}>{ formErrors.email}</span>}<br/>
                
                <TextField variant='standard' type='password' value={password} onChange={handelInput}
                 name='password' placeholder='Enter password' /><br/>
                {formErrors.password && <span style={{ color: 'red' }}>{formErrors.password}</span>}<br/>
                
                <Button variant='contained' size='small' color='primary' type='submit'>Register</Button>
            </form>
        </Container>
    )
}
export default Register