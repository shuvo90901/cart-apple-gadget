import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import CheckoutForm from '../Components/CheckoutForm'
import Nvabar from '../Components/Navbar/Nvabar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Nvabar></Nvabar>
      <div className='flex justify-center'>
        <CheckoutForm></CheckoutForm>
      </div>
    </div>
  )
}
