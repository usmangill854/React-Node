import React,{useState,useReducer,useContext} from "react";
import reducer  from "./reducers";
import axios from 'axios'
// const axios = require('axios')
import { REGISTER_USER_BEGIN,REGISTER_USER_ERROR,REGISTER_USER_SUCCESS,LOGIN_USER_BEGIN,LOGIN_USER_ERROR,LOGIN_USER_SUCCESS } from "./actions"

const initialState = {
    user:null,
    token:null

}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer (reducer,initialState)
    
    
    const registerUser = async(currentUser) => {
        dispatch({type:REGISTER_USER_BEGIN})
        try {
            const responce = await axios.post('/api/v1/auth/register',currentUser)
            console.log(responce)
            const{user,token} = responce.data
            dispatch({
                type:REGISTER_USER_SUCCESS,
                payload:{
                    user,token
                }
            })
        } catch (error) {
            console.log(error.responce)
            dispatch({
                type:REGISTER_USER_ERROR,
                payload:{msg:error.responce.data.msg}
            })
        }
    }
    
    return(
        <AppContext.Provider value={{...state,registerUser}}>
                {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider,useAppContext,initialState}