import React,{useState} from 'react'
import MyNotesForm from './MyNotesForm'
import { startRemoveNotes } from "../Actions/NotesAction";
import { startShowNotes } from "../Actions/NotesAction";
import { startEditNotes } from "../Actions/NotesAction";
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';


const MyNotesItem = (props) => {
    
    const dispatch = useDispatch()
    
    const { _id,title,body } = props
    const [toggle, setToggle] = useState(false)
    
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
        dispatch(startEditNotes({ ...note, _id: _id }))
        handelToggle()
    }

    return (
        <div>
        {toggle ? (
            <>
                 <MyNotesForm formSubmit={handelSubmit} title={title} body={body} handelToggle={handelToggle} toggle={ toggle}/>
                {/* <Button variant='contained' size='small' color='secondary' onClick={() => {
                    handelToggle(_id)
                }}>Cancel</Button>  
                */}
            </>
        )  : <>
                    <h2 style={{color:'black'}} onClick={() => {
                        handelShow(_id)
                    }}>{title}</h2>
                    <Button variant='contained' size='small' color='primary' style={{marginRight:'0.2rem'}} onClick={() => {
                        handelToggle(_id)
                    }}>Edit</Button>
                    <Button variant='contained' size='small' color='secondary' onClick={() => {
                        handelRemove(_id)
                    }}>Remove</Button>
        </> }
        
    </div>
    )
}
export default MyNotesItem