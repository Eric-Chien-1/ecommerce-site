import './App.css';
import Navigation from './components/Navigation'
import ItemCarousel from './components/ItemCarousel';
// import { gapi } from 'gapi-script';

// function handleCallbackResponse(response) {
//   console.log("Encoded JWT ID token: " + response.credential);
// }

// function App() {
//   useEffect( () =>{
//     /*global google */
//     google.accounts.id.initialize({
//       clientId : "802166893743-ijn456s7qbjkaf9uec4ubs88ndsifa4s.apps.googleusercontent.com",
//       callback: handleCallbackResponse
//     });
//     google.accounts.id.renderButton(
//       document.getElementById("signInDiv"),
//       {theme:"outline", size: "large"}
//     );
//   },[]);

const App = () => {
  return (
    <>
      <Navigation />
      <ItemCarousel />


    </>
  );
}

export default App;
