import {useState} from 'react'
import {addFootball} from "../service/FootballService.js";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, Container, Card, Row, Col, Form as BsForm} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Add() {
    const navigate = useNavigate();

    const validation = Yup.object({
        id: Yup.number().required("Not empty")
            .positive("Id >0").integer("positive integer"),
        code: Yup.string().required("Code not empty"),
        name: Yup.string()
            .required("Name not empty")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,"Name not format!"),
        dob: Yup.string()
            .required("dob not empty"),
        value: Yup.number()
            .required("Value not empty")
            .positive("Value > 0"),
        position: Yup.string()
            .required("Position not empty"),
    });

    const handleSubmit = (values) => {
        const newFootball = {
            ...values,
            id: Number(values.id),
            value: Number(values.value),
        };
        addFootball(newFootball);
        toast.success("Added football");
        setTimeout(() => {
            navigate("/football")
        }, 1000);
    }
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow-lg p-4 rounded-4">
                        <h3 className="text-center mb-4">⚽ Add New Football</h3>

                        <Formik
                            initialValues={{
                                id: "",
                                code: "",
                                name: "",
                                dob: "",
                                value: "",
                                position: "",
                            }}
                            validationSchema={validation}
                            onSubmit={handleSubmit}
                        >
                            <Form>

                                <BsForm.Group className="mb-3">
                                    <BsForm.Label>ID</BsForm.Label>
                                    <Field name="id" className="form-control"/>
                                    <ErrorMessage name="id" component="div" className="text-danger"/>
                                </BsForm.Group>

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

                                <BsForm.Group className="mb-3">
                                    <BsForm.Label>Position</BsForm.Label>
                                    <Field name="position" className="form-control"/>
                                    <ErrorMessage name="position" component="div" className="text-danger"/>
                                </BsForm.Group>

                                <div className="d-flex justify-content-between">
                                    <Link to="/football">
                                        <Button variant="secondary">Back</Button>
                                    </Link>

                                    <Button variant="success" type="submit">
                                        Add Football
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

export default Add;