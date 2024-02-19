import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../../Pages/Login";
import { Register } from "../../Pages/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Login/index.tsx" element={<Login/>}/>
                <Route path="/Register/index.tsx" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export {Router}