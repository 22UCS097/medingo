import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { AppContext } from '../context/AppContext';


export default function Doctors() {

  const {speciality}=useParams();

  const {doctors}=useContext(AppContext)
  return (
    <div>
       <p>Browse through the doctors specialist.</p>
       <div>
          <div>
               <p>General phy</p>
               <p></p>
               <p></p>
               <p></p>
               <p></p>
               <p></p>
          </div>
       </div>
      
    </div>
  )
}
