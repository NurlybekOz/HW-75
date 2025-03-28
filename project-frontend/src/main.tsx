import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <CssBaseline/>
        <ToastContainer/>
        <App />
    </BrowserRouter>

)

