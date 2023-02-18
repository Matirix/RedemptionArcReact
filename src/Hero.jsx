import React from 'react'

function Hero() {
  return (
    // The Hero Container right under the navbar
    // flex-col md:flex-row means that the elements will be stacked vertically on mobile otherwise (md:flex-row) they will be side by side
    // justify-evenly means that the elements will be spaced evenly with a gap of 3 in between
    <div className='flex flex-col md:flex-row py-10 bg-turquoise justify-evenly gap-3 text-start'>
        {/* Left div. Each div is a sentence to section them out. */}
        <div className="left text-7xl m-3"> 
          <div className='text-purple'> Responsive </div>
          <div className='text-purple'> Layout Design </div>
          <div className='text-slate-300'> can be a breeze.</div>

          {/*  */}
        </div>


        {/* Right div. The text is white and the button is purple */}
        {/* md:w-1/2 means it'll take up half the parent div AKA the larger container when it is not on desktop */}
        <div className='md:w-1/2 text-white flex flex-col m-3 text-4xl  text-start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec aliquam
            
            {/* Button */}
            <button className='bg-lightPurple text-purple rounded-lg p-2 text-lg my-10 w-3/5'>
                I have a desire to expand my understanding.
            </button>

        </div>
        
    </div>
  )
}

export default Hero