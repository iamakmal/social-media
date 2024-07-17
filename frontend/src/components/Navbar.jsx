import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className="navbar bg-[#F3F5F7]">
  <div className="navbar-start">
    <img src="logo.png" className="md:h-16"/>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl text-[#5271FF]">Home</a>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#5271FF] text-white">Create Post</a>
  </div>
</div>
    </>
  )
}
