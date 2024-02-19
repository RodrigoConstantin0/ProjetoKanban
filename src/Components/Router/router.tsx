import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../../Pages/Login";
import Kanban from "../../Pages/Kanban";
import { Register } from "../../Pages/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Login/index.tsx" element={<Login/>}/>
                <Route path="/Register/index.tsx" element={<Register/>}/>
                <Route path="/Kanban" element={<Kanban/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export {Router}