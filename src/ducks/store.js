import { createStore } from 'redux'


const initialState = {
    kid: {
        firstname: '',
        lastname: '',
        address: '',
        state: '',
        country: '',
        wish: '',
        age: '',
        deeds: '',
        deer: '',
        kidPic: '',
        toyPic: ''
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //-----repeat below for each piece of state you are sending to redux
        case 'ADD_FIRSTNAME':
            var addfirstname = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, firstname: addfirstname
                }
            }
            return newState
        case 'ADD_LASTNAME':
            var addlastname = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, lastname: addlastname
                }
            }
            return newState
        case 'ADD_ADDRESS':
            var addaddress = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, address: addaddress
                }
            }
            return newState
        case 'ADD_STATE':
            var addstate = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, state: addstate
                }
            }
            return newState
        case 'ADD_ZIP':
            var addzip = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, zip: addzip
                }
            }
            return newState
        case 'ADD_COUNTRY':
            var addcountry = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, country: addcountry
                }
            }
            return newState
        case 'ADD_WISH':
            var addwish = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, wish: addwish
                }
            }
            return newState
        case 'ADD_AGE':
            var addage = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, age: addage
                }
            }
            return newState
        case 'ADD_DEEDS':
            var adddeeds = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, deeds: adddeeds
                }
            }
            return newState
        case 'ADD_DEER':
            var adddeer = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, deer: adddeer
                }
            }
            return newState
        case 'ADD_KIDPIC':
            var addkidPic = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, kidpic: addkidPic
                }
            }
            return newState
        case 'ADD_TOYPIC':
            var addtoyPic = action.value
            var newState = {
                ...state,
                kid: {
                    ...state.kid, toyPic: addtoyPic
                }
            }
            return newState





    }

}    
export default createStore(reducer, initialState)