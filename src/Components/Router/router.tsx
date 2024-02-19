import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../../Pages/Login";
import Kanban from "../../Pages/Kanban";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Kanban" element={<Kanban/>}/>

            </Routes>
        </BrowserRouter>
    )
}
export {Router}