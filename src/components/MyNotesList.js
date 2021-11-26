import { Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from 'react-redux'
import MyNotesItem from "./MyNotesItem";

const MyNotesList = (props) => {
    const paperStyle = {
        padding: '10px',
        margin:'10px'
    }
    const notes = useSelector((state) => {
        return state.notes
    })
    return (
        <>
            {notes.data.length === 0 ? <p>No notes added, add notes</p> : (
                <>
                    <h3>Total Notes - {notes.data.length}</h3>
                    {notes.data.map((note) => {
                        return (
                            <Paper style={ paperStyle}>
                                <MyNotesItem key={note._id} {...note} />
                            </Paper>
                            
                        )
                    })}
                 </> 
            )}   
        </>
    )
}
export default MyNotesList