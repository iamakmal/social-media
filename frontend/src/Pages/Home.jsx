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
            posts.length > 0 ? posts.map((post,index)=>(
                <PostCard key={index} post={post}/>
            )):
            <div className='h-screen flex justify-center items-center'>
                <h1 className="text-xl font-semibold">No Posts Available Right Now Check Back Later</h1>
            </div>    
        }
    </div>
    </>
  )
}
