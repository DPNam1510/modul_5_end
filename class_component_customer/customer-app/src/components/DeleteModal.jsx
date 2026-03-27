import {Component} from "react";
import { Modal, Button } from "react-bootstrap";
import {deleteById} from "../service/CustomerService.js";

class DeleteModal extends Component {
    constructor() {
        super();
    }

    handleClose = () => {
        this.props.closeModal();
    };
    handleDelete = () => {
        const {deleteCustomer, onDeleteSuccess} = this.props;
        deleteById(deleteCustomer.id);
        onDeleteSuccess();
    };

    render() {
        const {isShowModal,deleteCustomer} = this.props;
        return (
            <>
                <Modal show={isShowModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Customer</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>
                            Do you want to delete customer {deleteCustomer?.name}?
                        </p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Huỷ
                        </Button>
                        <Button variant="danger" onClick={this.handleDelete}>
                            Xoá
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default DeleteModal;