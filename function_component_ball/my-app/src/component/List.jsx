import {useEffect, useState} from "react";
import {getAll,searchFootball} from "../service/FootballService.js";
import {getList} from "../service/PositionService.js";
import {Link} from "react-router-dom";
import {Container, Table, Button, Card} from "react-bootstrap";
import Delete from "./Delete";
import {Field, Form, Formik} from "formik";

const FootballList = () => {
    const [footballList, setFootballList] = useState([]);
    const [positionList, setPositionList] = useState([]);
    const [reload, setReload] = useState(false);
    const [deleteFootball, setDeleteFootball] = useState({name: ""});
    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {
       const fetData = async () => {
           const footballData = await getAll();
           const positionData = await getList();
           setFootballList(footballData);
           setPositionList(positionData);
       }
       fetData();
    }, [reload]);

    const [search] = useState({
        footballCode:"",
        name:"",
        position:""
    });

    const handleReload = async () => {
        setFootballList(await getAll());
    }

    const handleSearch = async (value) => {
        console.log(value);
        const code = value.footballCode;
        const name = value.name;
        const position = value.position;
        setFootballList(await searchFootball(code, name, position));
    }


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

                <Formik initialValues={search} onSubmit={handleSearch}>
                    <Form>
                        <Field name={'footballCode'} placeholder={'Search code'}/>
                        <Field name={'name'} placeholder={'Search name'}/>
                        <Field as={'select'} name={'position'}>
                            <option value={''}>---choose position---</option>
                            {positionList.map((p)=>(
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </Field>
                        <Button type={'submit'} className={'btn btn-sm'}>Search</Button>
                        <Button type={'reset'}
                                onClick={handleReload}
                                className={'btn btn-sm btn-dark'}>
                            Reset
                        </Button>
                    </Form>
                </Formik>

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
                                <td>
                                    {positionList.find(p => p.id === f.positionId)?.name || ""}
                                </td>
                                <td>
                                    <Link to={`/football/detail/${f.id}`}>
                                        <Button variant="info" size="sm" className="me-2">
                                            Detail
                                        </Button>
                                    </Link>

                                    <Link className={'btn btn-sm btn-warning'} to={`/football/update/${f.id}`}>
                                        Edit
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