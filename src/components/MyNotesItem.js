import { Button } from "@material-ui/core";
import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { startRemoveNotes } from "../Actions/NotesAction";
import { startShowNotes } from "../Actions/NotesAction";
import { startEditNotes } from "../Actions/NotesAction";
import EditNotes from './EditNotes'
import '../style.css'

const MyNotesItem = (props) => {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const notes = useSelector((state) => {
        return state.notes.data
    })

    const handelRemove = (_id) => {
        dispatch(startRemoveNotes(_id))
    }

    const handelShow = (_id) => {
        dispatch(startShowNotes(_id))
    }
   
    const handelToggle = (_id) => {  
        const result = !toggle
        setToggle(result)
    }

    const handelSubmit = (note) => {
        setId(note._id)
        setTitle(note.title)
        setBody(note.body)
    }

    return (
        <>
            {toggle ?
                (<> <EditNotes id={id} title={title} body={body} handelToggle={handelToggle} />
                    <Button variant='contained' size='small' color='secondary' onClick={handelToggle}>cancel</Button></>) :
                (
                <>
                    {notes.map((note) => {
                return (
                     <>
                        <h3 onClick={() => {
                            handelShow(note._id)
                         }} key={note._id}>{note.title}</h3>
                        <Button style={{margin:'0.2rem'}} variant='contained' size='small' color='secondary' onClick={() => {
                         handelRemove(note._id)
                        }}>Remove</Button>
                        <Button variant='contained' size='small' color='primary' onClick={() => {
                            handelToggle(note._id)
                           handelSubmit(note)
                        }}>Edit</Button>
                     </>
                )
            })}
                </>
            ) }
            
        </>
    )
}
export default MyNotesItem