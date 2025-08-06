'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getPosts, savePosts } from '@/lib/posts'

export default function NewPostPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString(),
    }
    const posts = getPosts()
    savePosts([newPost, ...posts])
    router.push('/posts')
  }

  return (
    <div>
      <h1>새 글 작성</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
        <br />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
        <br />
        <button type="submit">작성</button>
      </form>
    </div>
  )
}
