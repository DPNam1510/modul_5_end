import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    const customers = [
        { id: 1, code: "C01", name: "Đinh Phương Nam", address: "Nghệ An", type: "VIP" },
        { id: 2, code: "C02", name: "Mai Tường Vi", address: "Gia Lai", type: "Normal" },
        { id: 3, code: "C03", name: "Nguyễn Đăng Khôi", address: "Hà Nội", type: "VIP" },
    ];
    return(
        <div>
            <h2>List Customer</h2>
            <table border="1" cellPadding="10">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {customers.map(c => (
                    <tr key={c.id}>
                        <td>{c.id}</td>
                        <td>{c.code}</td>
                        <td>{c.name}</td>
                        <td>{c.address}</td>
                        <td>{c.type}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App
