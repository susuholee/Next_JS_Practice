'use client'

export function getPosts() {
  if (typeof window === 'undefined') return []
  const raw = localStorage.getItem('posts')
  return raw ? JSON.parse(raw) : []
}

export function savePosts(posts) {
  localStorage.setItem('posts', JSON.stringify(posts))
}
