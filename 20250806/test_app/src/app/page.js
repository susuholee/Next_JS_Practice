'use client'

import { useEffect, useState } from 'react'
import { getPosts } from '@/lib/posts'
import Link from 'next/link'

export default function PostListPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(getPosts())
  }, [])

  return (
    <div>
      <h1>게시글 목록</h1>
      <Link href="/posts/create">+ 새 글 작성</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
