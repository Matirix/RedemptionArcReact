import React from 'react'

function Navbar() {
  return (
    // Entire Navbar. hidden md:flex means that it will be hidden on mobile and shown on desktop
    // justify-between means that the elements will be spaced evenly
    // bg-purple is the background color
    // font-display is the font
    <div className=' hidden md:flex justify-between bg-purple  font-display'>

        {/* Logo/Name on the left */}
        <div className="bold p-4 text-slate-200">COMP 1537 REDEMPTION ARC</div>


        {/* The links on the right, gap spaces each element out evenly */}
        <div className="flex gap-2 my-auto">
            <p className="text-slate-200">Home</p>
            <p className="text-slate-200">Contact</p>
            <p className="text-slate-200">About</p>
            <p className="text-slate-200">Sign in</p>
            {/* The 'button' but just a normal tag dressed with rounded corners (rounded-lg) and a background color */}
            <p className="rounded-lg p-1 bg-slate-100 m-auto">Sign up</p>

        </div>
        

    </div>
  )
}

export default Navbar