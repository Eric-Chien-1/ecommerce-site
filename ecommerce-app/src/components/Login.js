import { GoogleLogin } from 'react-google-login';

const clientId = "836896042725-ac0lni2u01lchoue7hct3fur0tumdm8i.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) =>{
        console.log("Login Success! Current user: ", res.profileObj);
    }

    const onFailure = (res) =>{
        console.log("Login failed! res: ", res);
    }

    return(
        <div id = "signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
                            
            />
        </div>
    )
}

export default Login;