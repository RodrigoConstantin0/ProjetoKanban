import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../../Pages/Login";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export {Router}