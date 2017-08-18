import { signUp_click } from '../actions/action_signUp.js'

function signUpReducer(state = {value:'none'}, action) {
   switch (action.type) {

      case signUp_click:
   
         return{
            value: 'block'
         }
   
      default:
      return state
   }
}  

export default signUpReducer