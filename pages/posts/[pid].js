import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const posts = {
  "1": {id: 1, name:"Post1", desc:"Post 1"}, 
  "2": {id: 2, name:"Post2", desc:"Post 2"},
  "3": {id: 3, name:"Post3", desc:"Post 3"}
}

export default function Post() {
  const router = useRouter()
  const [post, setPost] = useState(null)
  const { pid } = router.query
  useEffect(() => {
    if (pid) {
      setPost(posts[pid])
    }
  })
  if (!post) {
    return <div>loading...</div>
  }
  return <div>
      <h1>{post.name}</h1><div>{post.desc}</div>
      </div>
}


