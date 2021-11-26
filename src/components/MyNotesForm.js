import React,{useState} from "react";
import { Container, TextField,Button, TextareaAutosize ,Paper, Grid} from "@material-ui/core"
import '../style.css'

const MyNotesForm = (props) => {
    const { title: noteTitle, body: noteBody, formSubmit,toggle } = props
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
            formSubmit(formData)
            setTitle('')
            setNotesBody('')
        } else {
            setFormErrors(errors)
        }
        
    }

    return (
        <Grid>
            <form onSubmit={ handelSubmit}>
                <TextField className='formInputs' type='text'
                    value={title} onChange={handelInput}
                    name='title' label='Notes Title'
                /><br />
                {formErrors.title && <span style={{ color: 'red'}}>{formErrors.title}</span>}<br />
                
                <TextareaAutosize className='formInputs' minRows={3}
                    value={body} onChange={handelInput}
                    name='notesBody' placeholder='create your notes'
                    style={{height:'150px'}}
                /><br />
                
                {toggle ?
                    <Button variant='contained' size='small' color='primary'  type='submit' style={{marginRight:'0.2rem'}}>update</Button>
                    :
                    <Button variant='contained' size='small' color='primary' type='submit'>Add</Button>
                }
                
                {toggle && <Button variant='contained' size='small' color='secondary' type='submit'>cancel</Button>}
            </form>
        </Grid>
    )
}
export default MyNotesForm