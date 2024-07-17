import React,{useState,useEffect} from 'react'
import PostCard from '../components/PostCard'
import axios from "axios"

export default function Home() {
    const [posts, setPosts] = useState([])

    const retrievePosts = () => {
        axios.get("http://localhost:5000/api/v1/post").then((res) => {
            console.log(res.data)
            setPosts(res.data)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    useEffect(() => {
        retrievePosts()
    }, [])

  return (
    <>
    <div className='flex flex-col flex-wrap items-center p-10'>
        {
            posts.map((post,index)=>(
                <PostCard key={index} post={post}/>
            ))
        }
    </div>
    </>
  )
}
