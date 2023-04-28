import { createContext, useContext, useState } from "react";
import api from "../api/api";

export const AuthContext = createContext();
AuthContext.displayName = "UserAuth"

export default function AuthProvider({ children }){
    const [authentication, setAuthentication] = useState(false)
    const [tokenLocal, setTokenLocal] = useState("")
    const [name, setName] = useState("")
    const [tipoUser, setTipoUser] = useState(false)

    return(
        <AuthContext.Provider
            value={{authentication, setAuthentication, tokenLocal, setTokenLocal, tipoUser, setTipoUser, name, setName}}
        >
            {children}
        </AuthContext.Provider>
    )
}

//Hook personalizado
export function useAuthContext(){
    const { setAuthentication, setTokenLocal, setTipoUser, tokenLocal, tipoUser, authentication, name, setName } = useContext(AuthContext);
    
    function RealizarNewLoginCliente(data) {
        const token = data.token;
        const user = data.tipoUser;
        const name = data.nome;
        localStorage.setItem("token", token);
        localStorage.setItem("tipouser", user);
        localStorage.setItem("name", name);
        api.defaults.headers['Authorization'] = `${token}`
        setTokenLocal(localStorage.getItem("token"))
        setTipoUser(user)
        setAuthentication(true)
        setName(name)
    }

    function VerificarAntigoLogin() {
        if(localStorage.getItem("token") && localStorage.getItem("tipouser")){
            const token = localStorage.getItem('token')
            const tipoUsuario = localStorage.getItem("tipouser")
            const nome = localStorage.getItem("name")
            api.defaults.headers['Authorization'] = `${token}`
            setTokenLocal(token)
            setTipoUser(tipoUsuario)
            setAuthentication(true)
            setName(nome)
            return true
        }
        return false
    }

    function Deslogar() {
        if (localStorage.getItem("token") && localStorage.getItem("tipouser")) {
            localStorage.removeItem("token")
            localStorage.removeItem("tipouser")
            localStorage.removeItem("name")
            api.defaults.headers.common['Authorization'] = ``
            setTipoUser("")
            setTokenLocal("")
            setName("")
            setAuthentication(false)
        }
    }

    function ChecarLogin() {
        VerificarAntigoLogin()
        const objetoLogin = {tokenLocal, tipoUser, authentication, name};
        return objetoLogin;
    }

    return{
        Deslogar,
        VerificarAntigoLogin,
        RealizarNewLoginCliente,
        ChecarLogin,
        authentication,
        name,
        tipoUser,
        tokenLocal
    }
}

//CONTEXT
//PAGINA DE MENSAGENS CLIENTE
//PAGINA DE MENSAGENS DO FUNCIONARIO