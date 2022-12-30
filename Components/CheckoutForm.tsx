import styles from '../styles/Form.module.css'

const CheckoutForm = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.brand_logo}></div>
                <div className={styles.brand_title}>TWITTER</div>
                <div className="inputs">
                    <label className='ml-5 mt-5 text-left'>Name</label>
                    <input type="text" placeholder="Enter Your Name Please" />
                    <label className='ml-5 mt-5 text-left'>EMAIL</label>
                    <input type="email" placeholder="Enter Your Email Please" />
                    <label className='ml-5 mt-5 text-left'>Address</label>
                    <input type="text" placeholder="Enter Your Address Please" />
                    <label className='ml-5 mt-5 text-left'>Voucher</label>
                    <input type="text" placeholder="Enter The Voucher Name in Uppercase without space" />
                    <button type="submit">LOGIN</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;