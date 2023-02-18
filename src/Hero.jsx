import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col md:flex-row py-10 bg-turquoise justify-evenly gap-3 text-start'>
        <div className="left text-7xl m-3"> 
        <div className='text-purple'>
        Responsive 
        </div>
        <div className='text-purple'>
        Layout Design 

        </div>
        <div className='text-slate-300'> can be a breeze.</div>
        </div>
        <div className='text-white flex flex-col m-3 text-4xl md:w-1/2 text-start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec aliquam
            
            
            <button className='bg-lightPurple text-purple rounded-lg p-2 text-lg my-10 w-3/5'>
                I have a desire to expand my understanding.
            </button>
        </div>
        
    </div>
  )
}

export default Hero