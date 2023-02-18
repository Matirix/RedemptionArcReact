import React from 'react'

function Column() {
  return (
    // The Column Container beside the Content Container, Containers are all the samee
    <div className='m-auto'>
        {/* Box one */}
        <div className="bg-purple text-white p-10 m-2">
            <p className="txt-4xl bold">Design for Impact</p>
            <p className="txt-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
        {/* Box two */}
        <div className="bg-purple text-white p-10 m-2">
            <p className="txt-4xl bold">Design for Impact</p>
            <p className="txt-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
        {/* Box Three */}
        <div className="bg-purple text-white p-10 m-2">
            <p className="txt-4xl bold">Design for Impact</p>
            <p className="txt-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>

    </div>
  )
}

export default Column