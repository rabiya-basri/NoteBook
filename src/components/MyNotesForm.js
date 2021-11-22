import React,{useState} from "react";
// import { useDispatch } from 'react-redux'
// import { startAddNotes } from "../Actions/NotesAction";
import { Container, TextField,Button, TextareaAutosize } from "@material-ui/core"
import '../style.css'

const MyNotesForm = (props) => {
   // const dispatch = useDispatch()
    const { title: noteTitle, body: noteBody, formSubmit } = props
    
    const [title, setTitle] = useState(noteTitle?noteTitle:'')
    const [body, setNotesBody] = useState(noteBody?noteBody:'')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    
    const handelInput = (e) => {
        const attr = e.target.name
        if (attr === 'title') {
            setTitle(e.target.value)
        } else if (attr === 'notesBody') {
            setNotesBody(e.target.value)
        }
    }

    const runValidation = () => {
        if (title.trim().length === 0) {
            errors.title='Title cannot be blank'
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                title: title,
                body:body
            }
           // dispatch(startAddNotes(formData))
            formSubmit(formData)
            setTitle('')
            setNotesBody('')
        } else {
            setFormErrors(errors)
        }
        
    }

    return (
        <Container>
            <form onSubmit={ handelSubmit}>
                <TextField className='formInputs' type='text' value={title} onChange={handelInput}
                name='title' placeholder='Enter Notes Title' /><br />
                {formErrors.title && <span style={{ color: 'red'}}>{formErrors.title}</span>}<br />
                
                <TextareaAutosize className='formInputs'  minRows={3} value={body} onChange={handelInput}
                name='notesBody' placeholder='create your notes'
                style={{height:'150px'}}
                /><br />
                
                <Button variant='contained' size='small' color='primary' type='submit'>Add</Button>
            </form>
        </Container>
    )
}
export default MyNotesForm