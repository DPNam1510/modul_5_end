import {useEffect, useState} from "react";
import {getAll} from "../service/FootballService.js";
import {Link} from "react-router-dom";
import {Container, Table, Button, Card} from "react-bootstrap";
import Delete from "./Delete";

const FootballList = () => {
    const [footballList, setFootballList] = useState([]);
    const [reload, setReload] = useState(false);
    const [deleteFootball, setDeleteFootball] = useState({name: ""});
    const [isShowModal, setIsShowModal] = useState(false);
    useEffect(() => {
        setFootballList(getAll());
    }, [reload]);
    const handleOpenDelete = (football) => {
        setDeleteFootball(football);
        setIsShowModal(true);
    };
    return (
        <Container className="mt-5">
            <Card className="shadow-lg p-4 rounded-4">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>⚽ Football List</h3>
                    <Link to="/football/add">
                        <Button variant="success">+ Add New</Button>
                    </Link>
                </div>

                <Table striped bordered hover responsive className="text-center">
                    <thead className="table-dark">
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
                    {footballList.length === 0 ? (
                        <tr>
                            <td colSpan="8">No data</td>
                        </tr>
                    ) : (
                        footballList.map((f, i) => (
                            <tr key={f.id}>
                                <td>{i + 1}</td>
                                <td>{f.id}</td>
                                <td>{f.code}</td>
                                <td>{f.name}</td>
                                <td>{f.dob}</td>
                                <td>{Number(f.value).toLocaleString()} $</td>
                                <td>{f.position}</td>
                                <td>
                                    <Link to={`/football/detail/${f.id}`}>
                                        <Button variant="info" size="sm" className="me-2">
                                            Detail
                                        </Button>
                                    </Link>

                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleOpenDelete(f)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </Table>

            </Card>

            <Delete
                isShowModal={isShowModal}
                deleteFootball={deleteFootball}
                closeModal={setIsShowModal}
                setReload={setReload}
            />
        </Container>
    );
};
export default FootballList;