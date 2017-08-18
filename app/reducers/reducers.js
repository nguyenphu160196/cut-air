import { combineReducers } from 'redux'
import { signUp_click } from '../actions/actions.js'

function todo(state = {value:'none'}, action) {
   switch (action.type) {

      case signUp_click:
   
         return{
            value: 'block'
         }
   
      default:
      return {value: 'none'}
   }
}  

const todoApp = combineReducers({
   todo
})

export default todoApp