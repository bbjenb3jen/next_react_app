import { useRouter } from "next/router";
const ArticleDetail = ({article}) => {
    const router = useRouter();
    const style = {
        marginRight: 10,
        color: 'red',
      }
    const {id} = router.query;
    return ( 
        <div className="articleItem" style={style}>
            <h5>{article.title}</h5>
            <p>{article.body}</p>
        </div>
     );
}
 
export default ArticleDetail;

// export const getServerSideProps = async(context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json();
     
    
//       return {
//         props: { article }, // will be passed to the page component as props
//       }
// }

//static site generation
export const getStaticPaths = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const article = await res.json();
    const ids = article.map((article)=>article.id)
    const paths = ids.map(id=>({
        params: {id:id.toString()}
    }))
    return {
        paths,
        fallback:false
    }
}

// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
//     const data = await res.json();
  
//     // map data to an array of path objects with params (id)
//     const paths = data.map(ninja => {
//       return {
//         params: { id: ninja.id.toString() }
//       }
//     })
  
//     return {
//       paths,
//       fallback: false
//     }
//   }
  

//static props
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    const data = await res.json();
  
    return {
      props: { article: data }
    }
  }
  
