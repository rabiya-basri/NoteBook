import React from "react";
import { useSelector } from 'react-redux'
import MyNotesItem from "./MyNotesItem";

const MyNotesList = (props) => {
    const notes = useSelector((state) => {
        return state.notes
    })
    return (
        <>
            {notes.data.length === 0 ? <p>No notes added, add notes</p> : (
                <>
                    <h3>Total Notes - {notes.data.length}</h3>
                    <MyNotesItem />
                 </> 
            )}   
        </>
    )
}
export default MyNotesList