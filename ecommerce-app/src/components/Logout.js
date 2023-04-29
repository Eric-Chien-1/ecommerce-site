import { GoogleLogout } from 'react-google-login';

const clientId = "836896042725-ac0lni2u01lchoue7hct3fur0tumdm8i.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () =>{
        console.log("Log out successful!");
    }

    return(
        <div id = "signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;