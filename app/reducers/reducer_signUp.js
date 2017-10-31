import { signUp_click, signUp_cancel } from '../actions/action_signUp.js'
import {  } from '../actions/action_signUp.js'

const signUpReducer = (state = {value:'none'}, action)=>{
   switch (action.type) {
    case signUp_click:   
        return {
        ...state,
        value: 'block'
        }
    case signUp_cancel:   
        return {
        ...state,
        value: 'none'
    }  
    default:
      return state
   }
}  

export default signUpReducer