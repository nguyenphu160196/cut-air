export const signUp_click = 'SIGNUP_CLICK'
export const signUp_cancel = 'SIGNUP_CANCEL'

export const signUpClick = ()=>{
   return {
      type: signUp_click
   };
}

export const signUpCancel = ()=>{
    return {
       type: signUp_cancel
    };
 }