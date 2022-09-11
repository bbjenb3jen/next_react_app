import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>My home blog</title>
      <meta name="keywords" content="blog,list,testing" />
    </Head>
    <h1>Home Page</h1>
    </>
  )
}
