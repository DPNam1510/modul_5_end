import {useEffect,useState} from "react";
import {findById,updateFootball} from "../service/FootballService.js";
import {Link, useNavigate, useParams} from "react-router-dom";
import {getList} from "../service/PositionService.js";
import {Button, Card, Col, Container, Form as BsForm, Row} from "react-bootstrap";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Formik,Form} from "formik";

function Update() {

    const [football, setFootball] = useState({
        id: "",
        code: "",
        name: "",
        dob: "",
        value: "",
        positionId: ""
    });
    const {id} = useParams();
    const navigate = useNavigate();
    const [positionList, setPositionList] = useState([]);

    useEffect( () => {
        const fetDataPosition = async () => {
            setPositionList(await getList());
        }
        fetDataPosition();
    }, []);

    useEffect(() => {
        const fetData = async () =>{
            const footballData = await findById(id);
            if(footballData!=null){
                setFootball({
                    ...footballData,
                    positionId: footballData.positionId
                })
            }
        };
        fetData();
    },[id]);


    const handleSubmit =  (e) => {
        console.log("---------okkkk-------------------")
        e = {
            ...e,
            positionId: Number(e.positionId),
        }
        const fetData = async ()=>{
            const isSuccess = await updateFootball(e);
            console.log(isSuccess,"---result");

            if(isSuccess){
                toast.success("Update football successfully!");
                navigate("/football");
                console.log(isSuccess,"---result");
            }else {
                toast.error("Update not football successfully!");
                console.log(isSuccess,"---fails");

            }
        }
        fetData();

    }

    const validation = Yup.object({
        code: Yup.string().required("Code not empty"),
        name: Yup.string()
            .required("Name not empty")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,"Name not format!"),
        dob: Yup.string()
            .required("dob not empty"),
        value: Yup.number()
            .required("Value not empty")
            .positive("Value > 0"),
        positionId: Yup.string().required("Not empty"),
    });

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow-lg p-4 rounded-4">
                        <h3 className="text-center mb-4">⚽ Update Football</h3>

                        <Formik
                            initialValues={football}
                            validationSchema={validation}
                            enableReinitialize={true}
                            onSubmit={handleSubmit}>
                            <Form>
                                <BsForm.Group className="mb-3">
                                    <BsForm.Label>Code</BsForm.Label>
                                    <Field name="code" className="form-control"/>
                                    <ErrorMessage name="code" component="div" className="text-danger"/>
                                </BsForm.Group>

                                <BsForm.Group className="mb-3">
                                    <BsForm.Label>Name</BsForm.Label>
                                    <Field name="name" className="form-control"/>
                                    <ErrorMessage name="name" component="div" className="text-danger"/>
                                </BsForm.Group>

                                <BsForm.Group className="mb-3">
                                    <BsForm.Label>Date of Birth</BsForm.Label>
                                    <Field type="date" name="dob" className="form-control"/>
                                    <ErrorMessage name="dob" component="div" className="text-danger"/>
                                </BsForm.Group>

                                <BsForm.Group className="mb-3">
                                    <BsForm.Label>Transfer Value</BsForm.Label>
                                    <Field name="value" className="form-control"/>
                                    <ErrorMessage name="value" component="div" className="text-danger"/>
                                </BsForm.Group>

                                <BsForm.Group className="mb-4">
                                    <BsForm.Label>Position</BsForm.Label>
                                    <Field as="select" name="positionId" className="form-select">
                                        <option value="">-- Select Position --</option>
                                        {positionList.map(p => (
                                            <option key={p.id} value={p.id}>{p.name}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="positionId" component = {'small'} className="text-danger small"/>
                                </BsForm.Group>

                                <div className="d-flex justify-content-between">
                                    <Link to="/football">
                                        <Button variant="secondary">Back</Button>
                                    </Link>

                                    <Button variant="success" type="submit">
                                        Update Football
                                    </Button>
                                </div>

                            </Form>
                        </Formik>

                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default Update