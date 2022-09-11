import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  return (
    <>
    <Head>
      <title>My home blog</title>
      <meta name="keywords" content="blog,list,testing" />
    </Head>
    <ArticleList articles={articles}/>
    </>
  )
}
export const getStaticProps = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();
  return {
    props:{
      articles
    }
  }
}
