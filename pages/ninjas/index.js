
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a>
            <h3>{ ninja.name }</h3>
            <h5>{ninja.company.name}</h5>
            <h6>{ninja.address.geo.lat}</h6>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;