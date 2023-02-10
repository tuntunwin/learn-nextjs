import { useRouter } from 'next/router'
export default function Post({post}) {
    

    return <div>
        <h1>{post.name}</h1><div>{post.desc}</div>
        </div>
}

export async function getStaticPaths() {
    return {
      paths: [{ params: { pid: '1' } }, 
        { params: { pid: '2' } }, 
        { params: { pid: '3' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }

const posts = {
    "1": {id: 1, name:"Post1", desc:"Post 1"}, 
    "2": {id: 2, name:"Post2", desc:"Post 2"},
    "3": {id: 3, name:"Post3", desc:"Post 3"}
  }

  export async function getStaticProps(context) {
    {console.log("static paths")}

    const pid = context.params.pid
    return { 
        props: {
        post: posts[pid]
      }
    }
  }