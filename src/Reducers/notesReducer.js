const notesInitial = {
    data:[]
}
const notesReducer = (state = notesInitial, action) => {
    switch (action.type) {
        case 'ADD_NOTES': {
            return  {...state,data: [...state.data,action.payload]}
        }
        case 'REMOVE_NOTES': {
            return {
                ...state, data: [...state.data.filter((ele) => {
                return ele._id!==action.payload
            })]}
            
        }
        case 'GET_NOTES': {
            return {data:[...action.payload]} 
        }
        case 'SHOW_NOTES':{
            return {data:[action.payload]}
        }
        case 'EDIT_NOTES': {
            const result = state.data.map((ele) => {
                if (ele._id === action.payload._id) {
                    return {...ele,...action.payload}
                } else {
                    return {...ele}
                }
            })
            return {...state,data:[...result]}
        }
        default: {
            return {...state}
        }
    }
}
export default notesReducer