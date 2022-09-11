import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Next React App</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            &nbsp;
            &nbsp;
            <Link href="/about"><a>About</a></Link>
            &nbsp;
            &nbsp;
            <Link href="/ninjas"><a>List</a></Link>
        </nav>
     );
}
 
export default Navbar;
