import React from 'react'

export default function PostCard() {
  return (
    <div className='flex flex-col bg-[#F3F5F7] w-[500px] m-5'>
        <h1 className="text-3xl font-bold p-5 mb-5 bg-red-500 text-white">Post Title</h1>
        <h3 className="text-lg mb-5 text-justify p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, reiciendis molestias incidunt eos quidem quod ut tenetur eius suscipit tempora voluptatem nesciunt sed vitae, libero doloribus voluptatum. Corrupti, in dicta.</h3>
        <h5 className="flex justify-end text-gray-400 p-5">5 Comments</h5>
    </div>
  )
}
