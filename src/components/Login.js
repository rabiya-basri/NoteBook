import React,{useState} from 'react'
import Header from '../ReuseableComponent/Header'
import { startUserLogin } from '../Actions/userAction'
import { useDispatch } from 'react-redux'
import validator from 'validator'
import { Container, TextField,Button } from '@material-ui/core'

const Login = (props) => {
    
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
        <Container>
            <Header type='h1' text='Login' />
            <form onSubmit={ handelSubmit}>
                <TextField type='text' value={email} onChange={handelInput}
                name='email' placeholder='enter Email' /><br />
                {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}<br />
                
                <TextField type='password' value={password} onChange={handelInput}
                name='password' placeholder='enter Password' /><br />
                
                <Button variant='contained' size='small' color='primary' type='submit'>Login</Button>
            </form>
        </Container>
    )
}
export default Login