import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 

        <div className={styles.container}>
        <Head>
          <title>My app</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
        <Navbar/>
            {children}
            
        </main>
  
        <footer className={styles.footer}>
           <Footer/>
        </footer>
      </div>
     );
}
 
export default Layout;