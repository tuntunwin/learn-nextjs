import { useRouter } from 'next/router'
export default function Post({post}) {
    return <div>
        <h1>{post.name}</h1><div>{post.desc}</div>
        </div>
}

const posts = {
    "1": {id: 1, name:"Post1", desc:"Post 1"}, 
    "2": {id: 2, name:"Post2", desc:"Post 2"},
    "3": {id: 3, name:"Post3", desc:"Post 3"}
  }

  export async function getServerSideProps(context) {
   
    const pid = context.params.pid
    
    return { 
        props: {
        post: posts[pid]
      }
    }
  }