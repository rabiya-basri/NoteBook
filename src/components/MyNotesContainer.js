import React,{useEffect} from "react";
import Header from "../ReuseableComponent/Header";
import MyNotesForm from "./MyNotesForm";
import MyNotesList from "./MyNotesList";
import { useDispatch } from "react-redux";
import {  startAddNotes, startGetUsers } from "../Actions/NotesAction";
import { Container, Grid } from "@material-ui/core";

const MyNotesContainer = (props) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startGetUsers())
    }, [])
    
    const formSubmit=(formData)=>{
        dispatch(startAddNotes(formData))
    }

    return (
        <Container>
            <Grid container spacing={2} className='gridContainer'>
                <Grid item xs={12} md={7} className='gridItem'>
                <Header type='h2' text='My Notes' />
                    <MyNotesList />
                </Grid>
                <Grid item xs={12} md={5} className='gridItem'>
                    <Header type='h2' text='Add Notes' />
                    <MyNotesForm formSubmit={formSubmit} />
                </Grid>
            </Grid>      
        </Container>
    )
}
export default MyNotesContainer