import './App.css';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRXJswJkP8PeV0T6Ar2jZfNH8cfal12YU",
  authDomain: "mfe-navbar.firebaseapp.com",
  projectId: "mfe-navbar",
  storageBucket: "mfe-navbar.appspot.com",
  messagingSenderId: "755281463441",
  appId: "1:755281463441:web:c914c4447b1b4c787c5730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function App() {
  return (
    <div className="nav">
      hello
    </div>
  );
}

export default App;
