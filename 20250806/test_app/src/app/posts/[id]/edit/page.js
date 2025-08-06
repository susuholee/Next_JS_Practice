'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { getPosts, savePosts } from '@/lib/posts'

export default function EditPostPage() {
  const { id } = useParams()
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    const post = getPosts().find((p) => p.id === id)
    if (post) {
      setTitle(post.title)
      setContent(post.content)
    }
  }, [id])

  const handleUpdate = (e) => {
    e.preventDefault()
    const updated = getPosts().map((p) =>
      p.id === id ? { ...p, title, content } : p
    )
    savePosts(updated)
    router.push(`/posts/${id}`)
  }

  return (
    <div>
      <h1>글 수정</h1>
      <form onSubmit={handleUpdate}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <br />
        <button type="submit">저장</button>
      </form>
    </div>
  )
}
