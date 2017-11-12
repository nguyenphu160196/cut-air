export const SIGNUP_CLICK = 'SIGNUP_CLICK'
export const SIGNUP_CANCEL = 'SIGNUP_CANCEL'

export function handleScroll() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    var scroll = {
        x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
        y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
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
    display: 'none'
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
    default:
      return state
   }
} 

export default MainReducer