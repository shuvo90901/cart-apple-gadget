import Link from "next/link";
import { useEffect, useState } from "react";
import Nvabar from "../../Components/Navbar/Nvabar";
import styles from '../../styles/AllOrders.module.css'

const index = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders)
    return (
        <div className="min-h-screen">
            <Nvabar></Nvabar>

            <div className="overflow-x-auto px-10">
                <table className="table w-full text-gray-600 italic">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    <td>{order.total}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default index;