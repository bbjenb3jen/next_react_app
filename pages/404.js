import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Notfound = () => {
    const router = useRouter();
    useEffect(()=>{
      
      setTimeout(() => {
        router.push('/');
      }, 300);
    });
    return ( 
        <div>
            <h4>Oops! not found</h4>
            <Link href="/"><a>Back to home</a></Link>
        </div>
        
     );
}
 
export default Notfound;