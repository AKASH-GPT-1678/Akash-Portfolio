import React from 'react'

const ContactDisplay = () => {
    return (
        <div className='flex flex-col '>

            <div className='flex flex-col gap-8 mt-6'>

                <div className='flex flex-col gap-2'>


                    <label htmlFor="" className='text-2xl text-white font-bold'>Name</label>
                    <input type="text" placeholder='Enter your name' className='p-3 md:w-[500px] border-2 border-white placeholder:text-white mt-2' />
                </div>
                <div className='flex flex-col gap-2'>


                    <label htmlFor="" className='text-2xl text-white font-bold'>Email</label>
                    <input type="text" placeholder='Enter your email' className='p-3 md:w-[500px] border-2 border-white placeholder:text-white mt-2' />
                </div>
                <div className='flex flex-col gap-2'>


                    <label htmlFor="" className='text-2xl text-white font-bold'>Message</label>
                    <input type="text" placeholder='Enter your message' className='p-3 md:w-[500px] border-2 border-white placeholder:text-white mt-2' />
                </div>

                <button className='bg-purple-600 text-white font-bold p-3 cursor-pointer'>
                    Send a message
                </button>





            </div>




        </div>
    )
}

export default ContactDisplay;
