import axios from 'axios'

export const startRegisterUser = (formData,props) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/register', formData)
            .then((response) => {
                const users = response.data
                console.log('testing',users)
                dispatch(registerUser(users))
                alert('Registered successfully')
                props.history.push('/login')
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}
export const registerUser = (formData) => {
    return {
        type: 'REGISTER_USER',
        payload:formData
    }
}

export const startUserLogin = (formData,props) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/login', formData)
            .then((response) => {
                const users = response.data
                if (Object.keys(users).includes('errors')) {
                    alert(users.errors)
                } else {
                    console.log('successs')
                    dispatch(loginUser(users))
                    localStorage.setItem('token', users.token)
                    alert('successfully loggedin')
                    props.history.push('/')
                    props.handelAuth()
                }
                //console.log(users)
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}
export const loginUser = (formData) => {
    return {
        type: 'LOGIN_USER',
        payload:formData
    }
}

export const userAccount = (result) => {
    return {
        type: 'USER_ACCOUNT',
        payload:result
    }
}
export const startUserAccount = () => {
    return (dispatch) => {
        axios.get(`http://dct-user-auth.herokuapp.com/users/account`,
            {
                headers: {
                'x-auth':localStorage.getItem('token')
            }  })
            .then((response) => {
                const result=response.data
                console.log('account', result)
                dispatch(userAccount(result))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}