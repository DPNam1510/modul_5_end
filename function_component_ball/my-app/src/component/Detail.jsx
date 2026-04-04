import {useParams,useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {findById} from "../service/FootballService.js";
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import {Link} from "react-router";


function Detail() {
    const [football,setFootball] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetData = async () =>{
            const data = await findById(id);
            setFootball(data);
        }
        fetData();
    },[]);
    return (
        <Container className="mt-5">
            <Card className="shadow-lg p-4 rounded-4">
                <h3 className="text-center mb-4">⚽ Football Detail</h3>
                <Row className="mb-3">
                    <Col><b>ID:</b></Col>
                    <Col>{football.id}</Col>
                </Row>

                <Row className="mb-3">
                    <Col><b>Code:</b></Col>
                    <Col>{football.code}</Col>
                </Row>

                <Row className="mb-3">
                    <Col><b>Name:</b></Col>
                    <Col>{football.name}</Col>
                </Row>

                <Row className="mb-3">
                    <Col><b>Birthday:</b></Col>
                    <Col>{football.dob}</Col>
                </Row>

                <Row className="mb-3">
                    <Col><b>Transfer:</b></Col>
                    <Col>{Number(football.value).toLocaleString()} $</Col>
                </Row>

                <Row className="mb-3">
                    <Col><b>Position:</b></Col>
                    <Col>{football.position}</Col>
                </Row>

                <div className="text-center mt-4">
                    <Button variant="secondary" onClick={() => navigate("/football")}>
                        Back to List
                    </Button>
                </div>
            </Card>
        </Container>
    );
}
export default Detail;