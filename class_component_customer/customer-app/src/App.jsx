import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerList from './components/CustomerList.jsx'


function App() {
return (
    <>
        <h1>Customer List</h1>
        <CustomerList />
    </>
)
}

export default App
