const userInitialState = {
    data:[]
}

const userReducer = (state=userInitialState,action) => {
    switch (action.type) {
        case 'REGISTER_USER': {
            return { ...state, data: [action.payload ]}
        }
        case 'LOGIN_USER': {
            return {...state,data:[action.payload]}
        }
        case 'USER_ACCOUNT': {
            return {...state,data:[action.payload]}
        }
        default: {
            return { ...state }
        }
    } 
}
export default userReducer