import React from 'react'

function Footer() {
  return (
    <div className='bg-turquoise hidden md:flex flex-col'>
        {/* Big Text */}
        <div className='m-auto text-5xl text-white p-5'>Designing for user experience, every time.</div>
        {/* Footer */}
        <footer className='flex justify-evenly py-2'>
            <div className="About text-purple text-lg flex-col w-1/3">
                About Our Company
                <p className='text-white'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste maxime doloribus exercitationem nemo ullam ut deserunt a totam quaerat adipisci porro, tempore quasi veritatis animi pariatur labore, veniam odio temporibus.
                </p>
            </div>

            <div className="About text-purple text-lg flex-col">
                Getting Around
                <div className='text-white'>
                    <p>Home</p>
                    <p>Contact</p>
                    <p>About</p>
                </div>
            </div>


            <div className="About text-purple text-lg">
                Other things
                <div className='text-white'>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                </div>
            </div>
            <div className="About text-purple text-lg">
                And more
                <div className='text-white'>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>

                </div>
            </div>



        </footer>
    </div>
  )
}

export default Footer