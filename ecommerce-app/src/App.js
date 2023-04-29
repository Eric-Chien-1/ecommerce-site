import './App.css';
import Navbar from './components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "836896042725-ac0lni2u01lchoue7hct3fur0tumdm8i.apps.googleusercontent.com";


function App() {
  useEffect(() => {
    function start(){
        gapi.client.init({
            clientId : clientId,
            scope: ""
        })
    };
    gapi.load('client:auth2', start);
  });

  return (<>
    <Navbar />
    
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
