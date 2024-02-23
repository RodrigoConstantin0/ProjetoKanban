import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../../Pages/Login";
import Kanban from "../../Pages/Kanban";
import { Register } from "../../Pages/Register";
import AuthService from "../../Services/AuthService"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>           
                {AuthService.isAuthenticated() ? <Route path="/" element={<Kanban/>}/> : <Route path="/" element={<Login/>}/>}
                <Route path="/Register" element={<Register/>}/>                
            </Routes>
        </BrowserRouter>
    )
}


export {Router}