import axios from 'axios'
import { browserHistory } from 'react-router';

export const SIGNUP_CLICK = 'SIGNUP_CLICK'
export const SIGNUP_CANCEL = 'SIGNUP_CANCEL'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'
export const ICON_CHANGE = 'ICON_CHANGE'
export const SIGNUP_FAIL = 'SIGNUP_FAIL'
export const LOGIN_PROGRESS = 'LOGIN_PROGRESS'

export const handleSignup = (body,login) => {
    return (dispatch, getState) => {
        axios.post('/api/register',body)
		.then(function (response){
            dispatch({
                type: LOGIN_PROGRESS,
                payload: 'flex'
            })
			axios.post('/api/authenticate',login)
			.then(function (response) {
				var res = response.data;
                localStorage.setItem("access_token", res.token);
                localStorage.user = JSON.stringify(res.user);
                browserHistory.push('/home');
                dispatch({
                    type: LOGIN_PROGRESS,
                    payload: 'none'
                })			
			})
			.catch(function (error){
			})
		})
		.catch(function (error){
            dispatch({
                type: SIGNUP_FAIL,
                payload: 'An Error Occured!'
            })
		})
    }
}

export function handleScroll() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    var scroll = {
        x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
        y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    }
    return (dispatch, getState) => {
        var main = {...getState().main};
        if(scroll.y > 0){
            dispatch({
                type: ICON_CHANGE,
                payload: 'block'
            })
        }else if(scroll.y == 0){
            dispatch({
                type: ICON_CHANGE,
                payload: 'none'                
            })
        }   
    }
}

export const closeDialog = () => {
    return {
        type: CLOSE_DIALOG
    }
}

export const handleLogin = (body) => {
   return (dispatch, getState) => {
    dispatch({
        type: LOGIN_PROGRESS,
        payload: 'flex'
    })
    axios.post('/api/authenticate', body)
    .then(function (response) {
        var res = response.data;
        if(res.success == true){            
            localStorage.setItem("access_token", res.token);
            localStorage.user = JSON.stringify(res.user);
            location.href = '/home';
            dispatch({
                type: LOGIN_PROGRESS,
                payload: 'none'
            })            
        }else{
            dispatch({type: LOGIN_FAIL})
        }
    })
    .catch(function (error){
    })
   }
}

export const signupClick = () => {
   return {
      type: SIGNUP_CLICK
   };
}

export const signupCancel = () => {
    return {
       type: SIGNUP_CANCEL
    };
 }

 const initialState = {
    display: 'none',
    message: '',
    dialog: false,
    icon: 'none',
    block: 'none'
 }

 export const MainReducer = (state = initialState, action)=>{
   switch (action.type) {
    case SIGNUP_CLICK:   
        return {
        ...state,
        display: 'block'
        }
    case SIGNUP_CANCEL:   
        return {
        ...state,
        display: 'none'
    }  
    case LOGIN_FAIL:   
        return {
        ...state,
        dialog: true,
        message: 'The email or password is incorrect!',
        block: 'none'
        }
    case CLOSE_DIALOG:
        return {
        ...state,
        dialog: false
        }
    case ICON_CHANGE:
        return {
        ...state,
        icon: action.payload
        }
    case SIGNUP_FAIL:
        return {
        ...state,
        message: action.payload,
        dialog: true
        }
    case LOGIN_PROGRESS:
        return {
        ...state,
        block: action.payload
        }
    default:
      return state
   }
} 

export default MainReducer