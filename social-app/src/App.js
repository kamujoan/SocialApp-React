import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom";
import Profile from './pages/Profile'
import Messages from './components/messages/Messages'
import Login from './components/login/Login'


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/login" element={<Login/>} />
            
        </Routes>
    )
}

export default App
