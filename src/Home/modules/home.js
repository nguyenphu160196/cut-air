import axios from 'axios'

export const CLOSE_DIALOG = 'CLOSE_DIALOG'

export const closeDialog = () => {
    return {
        type: CLOSE_DIALOG
    }
}

const initialState = {
    
 }

 export const HomeReducer = (state = initialState, action)=>{
   switch (action.type) {
    case CLOSE_DIALOG:
        return {
        ...state,
        dialog: false
        }
    default:
      return state
   }
} 

export default HomeReducer