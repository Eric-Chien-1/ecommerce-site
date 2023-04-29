import React from 'react'
import '../css/SignIn.css'


const SignIn = () => {
    return (
        <>
            <div className='form form-container'>
                < div className='form-body my-form'>
                    <h1>Login</h1>
                    <div className='username-input'>
                        <label className='form_label' for="userName">Username:&nbsp; </label>
                        <input className='form_input' type='text' placeholder='Enter Username' />
                    </div>
                    <div className='password-input'>
                        <label classNam='form_label' for='password'>Password: &nbsp;</label>
                        <input className='form_input' type='text' placeholder='Enter Password' />
                    </div>
                    <div className='footer-input'>
                        <button type='submit' class='btn btn-dark'> Submit</button>
                    </div>
                    <hr />
                    <a href='#changePassword'>Forgot your password?</a>
                    <a href='./SignUp'>Do not have an account?</a>
                    <br />
                    <a href='./Home'>Continue as guest</a>
                </div>
            </div >

        </>
    );
}
export default SignIn;