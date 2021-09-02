import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Particles from "react-tsparticles";
function App() {
  return (
    <>
    <Card/>
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	    }} />
    </>
  );
}

export default App;
