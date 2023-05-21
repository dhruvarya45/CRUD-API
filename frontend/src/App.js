import './App.css';
import {Container,Row,Col} from "react-bootstrap";
import { Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
import { UserAuthContextProvider } from './Context/UserAuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/chats" element={<ChatPage />}/>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
