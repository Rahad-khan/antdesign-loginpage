import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
