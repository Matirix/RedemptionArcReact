import React from 'react'
import Column from './Column'

function Content() {
  return (
    <div className='flex flex-col md:flex-row m-10'>
        {/* Left Column */}
        <div className='flex flex-col md:w-2/3'> 
            <div className='left'>
                <div className="text-purple text-3xl text-start my-4 font-display">
                    Bringing your vision to life
                </div>
                <div className='text-start m-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum a illum quae maxime atque deleniti quod eius tenetur nemo tempore. Architecto quisquam recusandae facilis iusto libero, eius tenetur sunt deserunt?

                </div>
                    {/* Image */}
                <img className='m-auto' src="https://picsum.photos/200/400?grayscale" alt="" />

                <div className='text-start m-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus doloribus eius enim saepe reiciendis officiis perspiciatis facere ex sed incidunt aliquam numquam, tempora ab ad similique sunt quos ratione!
                </div>
            </div>
        </div>
        {/* Right Column */}

        <Column/>
    </div>
  )
}

export default Content