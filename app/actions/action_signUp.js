export const signUp_click = 'SIGNUP_CLICK'
export const signUp_cancel = 'SIGNUP_CANCEL'

export const signUpClick = ()=>{
   return {
      type: SIGNUP_CLICK
   };
}

export const signUpCancel = ()=>{
    return {
       type: SIGNUP_CANCEL
    };
 }