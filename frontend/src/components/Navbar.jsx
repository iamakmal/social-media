import React, { useState } from 'react'
import axios from "axios"

export default function Navbar() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');

    const addPost = (e) => {
        e.preventDefault()
        const data = {
            title,
            description,
            color
        }
        axios.post("http://localhost:5000/api/v1/post", data).then(() => {
            setTitle("")
            setDescription("")
            //After adding note it will return back to All Notes Page
            //navigate('/allNotes', { replace: true });
        })
            .catch((error) => {
                console.log(error.response.data)
            })
    }

    return (
        <>
            <div className="navbar bg-[#F3F5F7]">
                <div className="navbar-start">
                    <img src="logo.png" className="md:h-16" />
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl text-[#5271FF]">Home</a>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#5271FF] text-white" onClick={() => document.getElementById('new-post-modal').showModal()}>Create Post</a>
                </div>
            </div>

            <dialog id="new-post-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center">Create A New Post</h3>
                    <form className="flex flex-col m-5" onSubmit={addPost}>
                        <input type="text" placeholder="Title" className="input input-bordered w-full mb-5" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <textarea className="textarea textarea-bordered mb-5" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="text-base font-semibold">Tile Color</span>
                                <input type="radio" name="color" value="bg-blue-500" onChange={(e) => setColor(e.target.value)} className="radio bg-blue-500 checked:bg-blue-500" />
                                <input type="radio" name="color" value="bg-green-500" onChange={(e) => setColor(e.target.value)} className="radio bg-green-500 checked:bg-green-500" />
                                <input type="radio" name="color" value="bg-red-500" onChange={(e) => setColor(e.target.value)} className="radio bg-red-500 checked:bg-red-500" />
                                <input type="radio" name="color" value="bg-yellow-500" onChange={(e) => setColor(e.target.value)} className="radio bg-yellow-500 checked:bg-yellow-500" />
                                <input type="radio" name="color" value="bg-orange-500" onChange={(e) => setColor(e.target.value)} className="radio bg-orange-500 checked:bg-orange-500" />
                                <input type="radio" name="color" value="bg-teal-500" onChange={(e) => setColor(e.target.value)} className="radio bg-teal-500 checked:bg-teal-500" />
                                <input type="radio" name="color" value="bg-pink-500" onChange={(e) => setColor(e.target.value)} className="radio bg-pink-500 checked:bg-pink-500" />
                            </label>
                        </div>
                        <div className="flex">
                            <button type="submit" className="btn m-2 bg-[#5271FF] text-white w-full">Publish</button>
                        </div>
                    </form>

                </div>
            </dialog>
        </>
    )
}
