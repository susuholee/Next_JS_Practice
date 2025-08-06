'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { getPosts, savePosts } from '@/lib/posts'
import Link from 'next/link'

export default function PostDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const found = getPosts().find((p) => p.id === id)
    if (found) setPost(found)
  }, [id])

  const handleDelete = () => {
    const filtered = getPosts().filter((p) => p.id !== id)
    savePosts(filtered)
    router.push('/posts')
  }

  if (!post) return <p>로딩 중...</p>

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href={`/posts/${id}/edit`}>수정</Link>
      <button onClick={handleDelete}>삭제</button>
    </div>
  )
}
