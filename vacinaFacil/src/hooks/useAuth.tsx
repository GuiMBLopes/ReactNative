import { createContext, useContext, useState } from "react";
import { PostDataUser } from "../@types/api";

type PropsContext = {
    usuario: PostDataUser;
    setUsuario: (value: PostDataUser) => void;
}
const AuthContext = createContext<PropsContext>({usuario: {nome: "", cpf: "", dataNascimento: "", email: "", senha: "", telefone: ""}, setUsuario: () => {}});

export const AuthProvider = ({children}:any) => {
    const [usuario, setUsuario] = useState<PostDataUser>({nome: "", cpf: "", dataNascimento: "", email: "", senha: "", telefone: ""});
    return (
        <AuthContext.Provider value={{usuario, setUsuario}}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);