import React, {useState,setState} from 'react'
import '../css/SignUp.css'

function SignUp () {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [userName, setUserName] = useState(null);

    const handleSignUpChange = (e) => {
        const {id, value} = e.target;

        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id == "userName"){
            setUserName(value);
        }
    }

    const handleSubmit = () =>{
        console.log(firstName, lastName,userName,email,password,confirmPassword);
    }

    return(
        <div className='form'>
            <div className='form-body'>
                <h1 class="display-1">Sign Up</h1>

                <div className='firstname'>
                    <label className='form__label' for="firstName">First Name:</label>
                    <input className='form__input' class="form-control is valid" type='text' value={firstName} onChange={(e) => handleSignUpChange(e)} id='firstName' placeholder='First Name'></input>
               </div>

                <div className='lastname'>
                    <label className='form__label' for="lastName">Last Name:</label>
                    <input className='form__input' class="form-control" type='text' value={lastName} onChange={(e) => handleSignUpChange(e)} id='lastName' placeholder='Last Name'></input>
                </div>

                <div className='userName'>
                    <label className='form__label' for="userName">User Name:</label>
                    <input className='form__input' class="form-control" type='text' value={userName} onChange={(e) => handleSignUpChange(e)} id='userName' placeholder='User Name'></input>
                </div>

                <div className='email'>
                    <label className='form__label' for="email">Email:</label>
                    <input className='form__input' class="form-control" type='email' value={email} onChange={(e) => handleSignUpChange(e)} id='email' placeholder='Email'></input>
                </div>

                <div className='password'>
                    <label className='form__label' for="password">Password:</label>
                    <input className='form__input' class="form-control" type='password' value={password} onChange={(e) => handleSignUpChange(e)} id='password' placeholder='Password'></input>
                </div>

                <div className='confirm-password'>
                    <label className='form__label' for="email">Retype Email:</label>
                    <input className='form__input' class="form-control" type='password' value={confirmPassword} onChange={(e) => handleSignUpChange(e)} id='confirmPassword' placeholder='Confirm Password'></input>
                </div>
            </div>

            <div className='footer'>
                <button onClick={() => handleSubmit()} type='submit' class = 'btn btn-dark'>Submit</button>
            </div>
        </div>
    )
}

export default SignUp;