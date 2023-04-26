import './App.css';
import Navbar from './components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
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
