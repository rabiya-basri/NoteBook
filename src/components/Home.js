import { Grid,Container } from '@material-ui/core'
import React from 'react'
import notes from '../assests/notes.png'
import '../style.css'
const Home = (props) => {
    const paperStyle = {
        padding: 20,
        height: '70%',
        width: 400,
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <Container>
            <Grid item>
            <img src={notes} alt='Notespicture' style={ paperStyle}/>
            </Grid>
        </Container>
    )
}
export default Home