import Router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import styles from '../styles/Form.module.css'
import image from '../public/logo.webp'
import Image from 'next/image';

const CheckoutForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [amount, setAmount] = useState(0);
    const [voucher, setVoucher] = useState(0);
    const [total, setTotal] = useState(0)
    console.log(typeof (amount));
    console.log(typeof (voucher));
    let handleAmountChange = (e: any) => {
        let string = (e.target.value)
        let number = parseInt(string);
        setAmount(number)
    }
    let handleVoucherChange = (e: any) => {
        let string = (e.target.value)
        let number = parseInt(string);
        setVoucher(number)
    }
    const normal = (amount / 100) * voucher
    const subtotal = amount - normal;
    const addDelivery = subtotal + 100;

    const handleAddCart = (data: any) => {
        const name = data.name;
        const email = data.email;
        const address = data.address;
        const total = subtotal;
        const subTotal = addDelivery
        const cartInfo = { name, email, address, total, subTotal }
        fetch('https://task-kanishka-consultancy-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Orders added successfully');
            })
        console.log(cartInfo)
    }
    return (
        <div className='mb-12'>
            <div className={styles.container}>

                <div className='bg-black w-1/4 rounded-full mx-auto'>
                    <Image className='p-5' width={200} src={image}></Image>
                </div>
                <form onSubmit={handleSubmit(handleAddCart)} className="inputs">
                    <label className='ml-5 mt-5 text-left'>Name</label>
                    <input type="text" {
                        ...register("name",
                            {
                                required: 'Name is required'
                            }
                        )
                    } placeholder="Enter Your Name Please" />

                    <label className='ml-5 mt-5 text-left'>EMAIL</label>
                    <input type="email" {
                        ...register("email",
                            {
                                required: 'Email is required'
                            }
                        )
                    } placeholder="Enter Your Email Please" />
                    <label className='ml-5 mt-5 text-left'>Address</label>
                    <input type="text" {
                        ...register("address",
                            {
                                required: 'Address is required'
                            }
                        )
                    } placeholder="Enter Your Address Please" />
                    <label className='ml-5 mt-5 text-left'>Amount</label>
                    <input name='num' onChange={handleAmountChange} type="number" placeholder="Enter the Amount" required />

                    <label className='ml-5 mt-5 text-left'>Voucher</label>

                    <select
                        onChange={handleVoucherChange}
                        className="select input-bordered w-full ">
                        <option selected disabled>Select A Voucher</option>
                        <option
                            value={5}
                        >Discount5</option>
                        <option
                            value={10}
                        >Discount10</option>
                        <option
                            value={300}
                        >Winter-300</option>
                    </select>
                    <p className='ml-5 mt-5 text-left'>Total : {subtotal} Tk</p>
                    <p className='ml-5 mt-5 text-left'>Total Amount + Delivery fee(100Tk) : {addDelivery} Tk</p>

                    <button className='btn btn-accent' type="submit">Order</button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;