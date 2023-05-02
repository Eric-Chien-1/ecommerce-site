import './App.css';
import Navbar from './components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*import LoginButton from "./components/Login";*/
/*import LogoutButton from "./components/Logout";*/
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

function handleCallbackResponse(response){
  console.log("Encoded JWT ID token: " + response.credential);
}

function App() {
  useEffect( () =>{
    /*global google */
    google.accounts.id.initialize({
      clientId : "802166893743-ijn456s7qbjkaf9uec4ubs88ndsifa4s.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline", size: "large"}
    );
  },[]);

  return (<>
    <Navbar />
    
    <div id="signInDiv"></div>

    <footer>
      <div className='footer-container'>
        <p>Developed by: Eric Chien and Jaylon Garza</p>
        <p>Mock ecommerce store &#169;</p>
      </div>
    </footer>
  </>
  );
}

export default App;
