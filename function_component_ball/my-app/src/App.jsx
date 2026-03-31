import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from "./component/Header.jsx"
import List from "./component/List.jsx";
import {Route, Routes} from "react-router";
import Add from "./component/Add.jsx";
import Detail from "./component/Detail.jsx";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/football'} element={<List/>}/>
                <Route path={'/football/add'} element={<Add/>}/>
                <Route path={'/football/detail/:id'} element={<Detail/>}/>
            </Routes>
            <ToastContainer/>
        </>
    )
}

export default App;


