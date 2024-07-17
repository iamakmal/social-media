import React from 'react'
import PostCard from '../components/PostCard'

export default function Home() {
  return (
    <>
    <div className='flex flex-col flex-wrap items-center p-10'>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </div>
    </>
  )
}
