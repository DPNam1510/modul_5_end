import {useEffect, useState} from "react";
import {getAll} from "../service/FootballService.js";
import Add from "./Add";
import Detail from "./Detail";
import Delete from "./Delete";

const FootballList = () => {
    const [footballList, setFootballList] = useState([]);
    const [reload, setReload] = useState(false);
    const [deleteFootball, setDeleteFootball] = useState({name: ""});
    const [isShowModal, setIsShowModal] = useState(false);
    const [detailFootball, setDetailFootball] = useState({name: ""});
    useEffect(() => {
        setFootballList(getAll());
    }, [reload]);
    const handleOpenDelete = (football) => {
        setDeleteFootball(football);
        setIsShowModal(true);
    };
    const handleDetailFootball = (football) => {
        setDetailFootball(football);
    };
    return (
        <>
            <Add setReload={setReload}/>
            <h2>Football List</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Transfer</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {footballList.map((f, i) => (
                    <tr key={f.id}>
                        <td>{i + 1}</td>
                        <td>{f.id}</td>
                        <td>{f.code}</td>
                        <td>{f.name}</td>
                        <td>{f.dob}</td>
                        <td>{f.value}</td>
                        <td>{f.position}</td>
                        <td>
                            <button onClick={() => handleDetailFootball(f)}>Detail</button>
                            <button onClick={() => handleOpenDelete(f)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Detail football={detailFootball} />
            <Delete
                isShowModal={isShowModal}
                deleteFootball={deleteFootball}
                closeModal={setIsShowModal}
                setReload={setReload}
            />
        </>
    );
};
export default FootballList;