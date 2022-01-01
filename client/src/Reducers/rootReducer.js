const initialState = {
    isAuthenticated: false,
    userCredentials: {
        email: "",
        password: "",
        username: "",
    },
    isCreateParcelSelected: true,
    myParcels: []
}
const rootReducer = (state = initialState, action)=>{
    console.log(action.type);
    if(action.type === 'CHANGE_CREATE_PARCEL_SELECTED'){
        console.log('create Parcel selected: ' + action.payload)
        return {
            ...state,
            isCreateParcelSelected: action.payload
        }
    } else if(action.type === "CHANGE_IS_AUTHENTICATED"){
        console.log('changing authentication status to ' + action.payload)
        return {
            ...state,
            isAuthenticated: action.payload
        }
    } else if(action.type === "CHANGE_MY_PARCELS"){
        console.log('changing authentication status to ' + action.payload)
        return {
            ...state,
            myParcels: action.payload
        }
    } else if(action.type === "LOGIN" || action.type === "REGISTER"){
        console.log('changing credential details ' + action.payload)
        return {
            ...state,
            userCredentials: action.payload
        }
    } else return state
}

export default rootReducer