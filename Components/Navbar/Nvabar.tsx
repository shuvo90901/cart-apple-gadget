import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'

const Nvabar = () => {
    return (
        <div className={styles.background}>
            <div className="navbar mb-10 rounded-xl">
                <div className="flex-1">
                    <Link className='ml-10' href={'/'}>
                        <p className={styles.brand_title}>
                            APPLE GADGETS LTD.</p>
                    </Link>
                </div>
                <div className="flex-none">
                    <Link className='mr-10' href={'/all_orders'}>
                        <div className='btn btn-ghost'><p className={styles.all_button}>All Orders</p></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nvabar;