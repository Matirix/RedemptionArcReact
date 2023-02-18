import React from 'react'

function Navbar() {
  return (
    <div className=' hidden md:flex justify-between bg-purple  font-display'>
        <div className="bold p-4 text-slate-200">COMP 1537 REDEMPTION ARC</div>
        <div className="flex gap-2 my-auto">
            <p className="text-slate-200">Home</p>
            <p className="text-slate-200">Contact</p>
            <p className="text-slate-200">About</p>
            <p className="text-slate-200">Sign in</p>
            <p className="rounded-lg p-1 bg-slate-100 m-auto">Sign up</p>

        </div>
        

    </div>
  )
}

export default Navbar