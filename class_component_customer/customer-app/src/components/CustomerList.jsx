
import {Component} from "react";
import {getAll} from "../service/CustomerService.js";
import DeleteModal from "./DeleteModal.jsx";

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerList: [],
            isShowModal: false,
            deleteCustomer: {
                name: ""
            }
        }
    }
    componentDidMount() {
        console.log("---Did Mount---")
        this.loadData();
    }
    loadData = () => {
        this.setState({
            customerList:getAll()
        });
    };
    handleOpenModal = (customer) => {
        this.setState({
            isShowModal: true,
            deleteCustomer: customer,
        });
    };
    closeModal = () => {
        this.setState({
            isShowModal: false,
            deleteCustomer: null,
        });
    };
    handleDelete = (id) => {
        const newList = this.state.customers.filter(c => c.id !== id);

        this.setState({
            customers: newList,
            isShowModal: false,
            deleteCustomer: null
        });
    };
    render() {
        return (
            <>
                <table border="1">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID Number</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.customerList.map(e => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.idNumber}</td>
                            <td>{e.name}</td>
                            <td>{e.address}</td>
                            <td>{e.type}</td>
                            <td>
                                <button onClick={() => this.handleOpenModal(e)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteModal
                isShowModal={this.state.isShowModal}
                deleteCustomer={this.state.deleteCustomer}
                closeModal={this.closeModal}
                onDeleteSuccess={this.handleDelete}
                />
            </>
        )
    }
}
export default CustomerList;