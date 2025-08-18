import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14my-40 text-sm'>
            {/* ---left---- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum  sit amet consectetur adipisicing elit. Maiores, distinctio necessitatibus hic inventore harum eum similique magni delectus optio velit deleniti saepe ducimus quasi cum tenetur voluptatum doloremque nulla consequuntur?</p>
            </div>
            {/* ---center---- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li className=''>Home</li>
                    <li>Contact US</li>
                    <li>About As</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            {/* ---right---- */}
            <div>
                <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+125-418-654</li>
                    <li>abc@gmail.com</li>
                </ul>

            </div>

        </div>

        {/* ---copyright Text */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center' >copyright 2024@ prescripto-All Right Reserved.</p>

        </div>
      
    </div>
  )
}
