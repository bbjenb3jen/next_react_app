import ArticleItem from "./ArticleItem";

const ArticleList = ({articles}) => {
    return ( 
        <>
        {articles.map(article=>(
            <ArticleItem article={article} key={article.id}/>
          ))}
        </>
     );
}
 
export default ArticleList;