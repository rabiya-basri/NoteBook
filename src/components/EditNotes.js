import React from 'react'
import MyNotesForm from './MyNotesForm'
import { useDispatch } from 'react-redux'
import { startEditNotes } from '../Actions/NotesAction'
import '../style.css'

const EditNotes = (props) => {
    const dispatch = useDispatch()
    const { id, title, body,handelToggle } = props
    
    const formSubmit = (data) => {
        dispatch(startEditNotes({ ...data, _id: id }))
        handelToggle()
    }
    return (
        <div>
            <MyNotesForm formSubmit={formSubmit} id={id} title={title} body={ body}/>
        </div>
    )
}
export default EditNotes