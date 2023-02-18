import React from 'react'

function Footer() {
    return (
        // The Footer Container. hidden md:flex means that it will be hidden on mobile and will be flexed on desktop
        <div className='bg-turquoise hidden md:flex flex-col'>
            {/* Big Text */}
            <div className='m-auto text-5xl text-white p-5'>Designing for user experience, every time.</div>

            {/* Footer; This big Footer is flexed! and all it's children divs are COLUMNS. So they're vertically stacked*/}
            <footer className='flex justify-evenly py-2'>

                {/* Each of these divs are COLUMNS. So they're vertically stacked*/}
                <div className="About text-purple text-lg flex-col w-1/3">
                    About Our Company
                    <p className='text-white'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste maxime doloribus exercitationem nemo ullam ut deserunt a totam quaerat adipisci porro, tempore quasi veritatis animi pariatur labore, veniam odio temporibus.
                    </p>
                </div>

                {/* Each of these divs are COLUMNS. So they're vertically stacked*/}
                <div className="About text-purple text-lg flex-col">
                    Getting Around
                    <div className='text-white'>
                        <p>Home</p>
                        <p>Contact</p>
                        <p>About</p>
                    </div>
                </div>

                {/* Each of these divs are COLUMNS. So they're vertically stacked*/}
                <div className="About text-purple text-lg">
                    Other things
                    <div className='text-white'>
                        <p>Lorem</p>
                        <p>Lorem</p>
                        <p>Lorem</p>
                        <p>Lorem</p>
                    </div>
                </div>

                {/* Each of these divs are COLUMNS. So they're vertically stacked*/}
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