import { ArrowRight } from 'lucide-react'
import React from 'react'

const Offer = () => {
  return (
    <>
    <section className='w-full grid grid-cols-1 md:grid-cols-2 bg-gray-100'>
        {/* imags */}

        <div>
            <img src="/images/home1.png" alt="offer image" />
        </div>

        {/* text */}
       <div className='px-6 py-2 flex flex-col justify-center items-start'>
         <p className='text-md font-normal py-5'>Limited Time Offers</p>
        <h1 className='text-3xl font-bold leading-normal py-5'>
            25% Off All Fashion
            <br />
            Favorites - Limited Time !
        </h1>
        <p className='pt-10 text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur.
        </p>
    
        <button className="bg-[#583101] flex items-center justify-center text-white px-6 py-3 my-4 gap-x-4 active:scale-95 active:rounded-md">
                   Show Now <ArrowRight />
                 </button>
       </div>

    </section>
    </>
  )
}

export default Offer