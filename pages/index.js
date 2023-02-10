import Link from 'next/link'


export default function Home({links}) {
  return (
    <ul>
        {console.log(links.length)}
        {links.map((lk)=>(<li key={lk.name}><Link  href={lk.url}>{lk.name}</Link></li>))}
        
      </ul>
  )
}

export async function getStaticProps() {
  {console.log("static props")}
  return { 
    props: {
      links: [
          {name:"Posts", url:"/posts/"}, 
          {name:"Profile", url:"/profile"}
        ]
    }
  }
}

// export async function getServerSideProps() {
//     {console.log("static props")}
//     return { 
//       props: {
//         links: [
//             {name:"Posts", url:"/post/abc"}, 
//             {name:"Profile", url:"/profile"}
//           ]
//       }
//     }
//   }
