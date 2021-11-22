import React,{useState,useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Container } from '@material-ui/core'

const App = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handelAuth = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            handelAuth()
        }
    }, [])
    
    return (
        <Container>
        <BrowserRouter>
                <NavBar handelAuth={handelAuth} isLoggedIn={ isLoggedIn}/>
         </BrowserRouter>
         </Container>
    )
}
export default App