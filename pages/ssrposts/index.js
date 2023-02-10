import Link from 'next/link'
export default function Posts({pids}) {
    return (
        <ul>
            {console.log(pids.length)}
            {pids.map((pid)=>(<li key={pid}><Link  href={"/ssrposts/" + pid}>{"Post " + pid}</Link></li>))}
            
          </ul>
      )
}

export async function getServerSideProps() {
    return {
      props: {pids: [1,2,3]}
    }
  }