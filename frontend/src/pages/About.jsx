import React from 'react'
import { assets } from '../assets/assets'

export default function About() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium' >US</span></p>

      </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum natus dolorem accusamus dolor exercitationem ad expedita ipsum provident minima. Officiis quasi molestiae accusantium aut molestias ea et reiciendis reprehenderit?</p>
             <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque odio deleniti enim obcaecati cupiditate temporibus amet excepturi rem quidem nam atque impedit velit at facilis accusantium exercitationem error, quia modi.</p>
              <b className='text-gray-800'>Our Vision</b>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum accusantium mollitia delectus atque veritatis numquam perferendis, excepturi aspernatur molestias qui, earum beatae facere sint. Dignissimos totam impedit quibusdam modi dolorem.</p>
           </div>
        </div>

        <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span>  </p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-blue-500 hover:text-white duration-300 text-gray-600 cursor-pointer '>
             <b>Efficiency:</b>
             <p>Steamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white duration-300 text-gray-600 cursor-pointer '>
            <b>Convenience:</b>
             <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-blue-500 hover:text-white duration-300 text-gray-600 cursor-pointer '>
            <b>Personalization:</b>
             <p>Tailored recommendatins and reminder to help you stay on top of your health.</p>
          </div>
        </div>
      
    </div>
  )
}
