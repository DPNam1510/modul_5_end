import {useState, useEffect} from 'react'
import {addFootball} from "../service/FootballService.js";

function Add({setReload}) {
    const [form, setForm] = useState({
        id: "",
        code: "",
        name: "",
        dob: "",
        value: "",
        position: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev, [name]: value }));
    }
    const handleAddFootball = () => {
        const newFootball = {
            ...form,
            id: Number(form.id),
            value: Number(form.value),
        };
        addFootball(newFootball);
        setReload((prev) => !prev);
        setForm({
            id: "",
            code: "",
            name: "",
            dob: "",
            value: "",
            position: "",
        });
    };
    return (
        <>
            <h3>Add new football</h3>
            <input name="id" value={form.id}
                   onChange={handleChange} placeholder="Enter ID"/>

            <input name="code" value={form.code}
                onChange={handleChange} placeholder="Enter Code"/>

            <input name="name" value={form.name}
                onChange={handleChange} placeholder="Enter Name"/>

            <input type="date" name="dob" value={form.dob}
                onChange={handleChange}/>

            <input name="value" value={form.value}
                onChange={handleChange} placeholder="Enter Transfer"/>

            <input name="position" value={form.position}
                onChange={handleChange} placeholder="Enter Position"/>
            <br/>
            <button onClick={handleAddFootball}>Add Football</button>
        </>
    );
}
export default Add;