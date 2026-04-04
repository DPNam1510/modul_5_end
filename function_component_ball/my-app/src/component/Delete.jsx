import {Button, Modal} from "react-bootstrap";
import {deleteFootball} from "../service/FootballService.js";
import {toast} from "react-toastify";

function Delete({isShowModal, deleteFootball:football,closeModal,setReload}) {
    const handleClose = () => {
        closeModal(false);
    }
    const handleDelete = async () => {
        const isSuccess = await deleteFootball(football.id);
        if (isSuccess) {
            closeModal(false);
            setReload(prev => !prev);
            toast.success("Football deleted successfully!");
        }else {
            toast.error("Delete fails!");
        }
    }
    return (
        <>
            <Modal show={isShowModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Football</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Do you want delete: <b>{football.name}</b>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Delete;