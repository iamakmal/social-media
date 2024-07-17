import React, { useState } from 'react'

export default function PostCard() {
    const [comment, setComment] = useState()
    return (
        <>
            <div className='flex flex-col bg-white md:w-[500px] m-2 md:m-5' onClick={() => document.getElementById('post-modal').showModal()}>
                <h1 className="text-3xl font-bold p-5 mb-5 bg-red-500 text-white">Post Title</h1>
                <h3 className="text-lg mb-5 text-justify p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, reiciendis molestias incidunt eos quidem quod ut tenetur eius suscipit tempora voluptatem nesciunt sed vitae, libero doloribus voluptatum. Corrupti, in dicta.</h3>
                <div className="flex justify-between items-center m-5">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-200 hover:text-red-500">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </div>
                    <p className="text-gray-400">5 Comments</p>
                </div>
            </div>

            {/* Post Details Modal */}
            <dialog id="post-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center">Post Title</h3>
                    <div className='flex flex-col bg-[#F3F5F7] m-2 md:m-5'>
                        <h1 className="text-xl font-bold p-5 mb-2 bg-red-500 text-white">Post Title</h1>
                        <h3 className="text-base mb-2 text-justify p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, reiciendis molestias incidunt eos quidem quod ut tenetur eius suscipit tempora voluptatem nesciunt sed vitae, libero doloribus voluptatum. Corrupti, in dicta.</h3>
                        <div className="flex justify-between items-center m-5">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-200 hover:text-red-500">
                                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>
                            </div>
                            <p className="text-gray-400">5 Comments</p>
                        </div>
                    </div>
                    <h3 className="bg-[#F3F5F7] m-2 md:m-5 p-2">Comment 1 this is news</h3>
                    <div className="modal-action flex justify-between">
                        <input type="text" name="comment" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} className="input input-bordered w-full" placeholder="Enter Comment" />
                        <form method="dialog">
                            <button className="btn">Comment</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
