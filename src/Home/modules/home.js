import axios from 'axios'

export const CLOSE_DIALOG = 'CLOSE_DIALOG'
export const SIGN_OUT = 'SIGN_OUT'
export const ACC_SETTING = 'ACC_SETTING'
export const UPDATE_STATE = 'UPDATE_STATE'
export const ANSWER = 'ANSWER'

export const anSwer = () => {
    return (dispatch, getState) => {
        dispatch({
            type: ANSWER,
            payload: 'true'
        })
    }
}

export const updateState = (key, value) => {
    return {
        type: UPDATE_STATE,
        payload: value,
        key
    }
}

export const closeDialog = () => {
    return {
        type: CLOSE_DIALOG,
        payload: false
    }
}

export const accSetting = () => {
    return {
        type: ACC_SETTING,
        payload: true
    }
}

export const signOut = () => {
    localStorage.clear();
    location.href = '/'
}

const initialState = {
    dialog: false,
    acc_set: false
 }

 export const HomeReducer = (state = initialState, action)=>{
   switch (action.type) {
    case CLOSE_DIALOG:
        return {
        ...state,
        dialog: action.payload,
        acc_set: action.payload
        }
    case SIGN_OUT:
        return {
        ...state
        }
    case ACC_SETTING:
        return {
        ...state,
        acc_set: action.payload
        }
    case UPDATE_STATE:
        return {
        ...state,
        [action.key] : action.payload
        }

    default:
      return state
   }
} 

export default HomeReducer