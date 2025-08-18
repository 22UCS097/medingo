import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/specialityMenu'
import TopDoctors from '../components/TopDoctors.jsx'
import Banner from '../components/Banner.jsx'

export default function Home() {
  return (
    <div>
         <Header/>    
        <SpecialityMenu/> 
          <TopDoctors/> 
          <Banner/>
       
    </div>
  )
}
