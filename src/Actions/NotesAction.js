import axios from 'axios'
import swal from 'sweetalert'

export const addNotes = (formData) => {
    return {
        type: 'ADD_NOTES',
        payload:formData
    }
}

export const startAddNotes = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes', formData, {
            headers: {
                'x-auth':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const notesData = response.data
                console.log('note',notesData)
                dispatch(addNotes(notesData))
            })
            .catch((err) => {
            alert(err.message)
        })
    }
}

export const removeNotes = (_id) => {
    return {
        type: 'REMOVE_NOTES',
        payload:_id
    }
}

export const startRemoveNotes = (_id) => {
    return (dispatch) => {
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`, {
            headers: {
                'x-auth':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result=response.data
                console.log(result)
                dispatch(removeNotes(result._id))
            })
            .catch((err) => {
            alert(err.message)
        })
    }
}

export const getNotes = (notes) => {
    return {
        type: 'GET_NOTES',
        payload:notes
    }
}

export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes', {
            headers: {
                'x-auth':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                console.log(result)
                dispatch(getNotes(result))
            })
            .catch((err) => {
            alert(err.message)
        })
    }
}

export const showNotes = (_id) => {
    return {
        type: 'SHOW_NOTES',
        payload:_id
    }
}

export const startShowNotes = (_id) => {
    return (dispatch) => {
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`, {
            headers: {
                'x-auth':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                swal({
                    title: `${result.title}`,
                    text:`${result.body}`,
                    button:'close'
                })
                console.log(result)
            })
            .catch((err) => {
            alert(err.message)
        })
    }
}

export const editNotes = (data) => {
    return {
        type: 'EDIT_NOTES',
        payload:data
    }
}

export const startEditNotes = (formData) => {
    return (dispatch) => {
        axios.put(`http://dct-user-auth.herokuapp.com/api/notes/${formData._id}`, formData, {
            headers: {
                'x-auth':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(editNotes(result))
                console.log(response.data)
            })
            .catch((err) => {
               alert(err.message)
            })
    }
}