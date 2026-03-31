import {useParams,useNavigate} from 'react-router';
import {useEffect, useState} from 'react';
import {findById, getAll} from "../service/FootballService.js";
import {Link} from "react-router";
import {Button} from "react-bootstrap";


function Detail() {
    const [football,setFootball] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const list = getAll();
        const found = list.find(f => Number(f.id) === Number(id));
        setFootball(found);
    },[]);
    return (
        <>
            <h3>Football Detail</h3>
            <div>
            <p><b>ID:</b> {football?.id}</p>
            <p><b>Code:</b> {football?.code}</p>
            <p><b>Name:</b> {football?.name}</p>
            <p><b>Birthday:</b> {football?.dob}</p>
            <p><b>Transfer:</b> {football?.value}</p>
            <p><b>Position:</b> {football?.position}</p>
            </div>
            <button onClick={()=> navigate("/football")}>Back</button>
        </>
    );
}
export default Detail;