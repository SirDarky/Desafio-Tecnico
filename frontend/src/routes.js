import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NavBar from "./components/NavBar"
import AuthProvider from "./contexts/AuthContext"
import Conversa from "./pages/Conversa"
import Atendimentos from "./pages/funcionario/Atendimentos"
import Whatsapp from "./pages/cliente/Whatsapp"
import Email from "./pages/cliente/Email"

function AppRoutes() {
    return(
        <BrowserRouter>
            <AuthProvider>
                <NavBar/>
                <Routes>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    {
                        //Users
                    }
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/conversa" element={<Conversa/>}></Route>
                    <Route path="/whatsapp" element={<Whatsapp/>}></Route>
                    <Route path="/email" element={<Email/>}></Route>
                    {
                        //Funcionarios
                    }
                    <Route path="/atendimentos" element={<Atendimentos/>}></Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRoutes