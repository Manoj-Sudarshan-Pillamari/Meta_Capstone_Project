import React from 'react'
import serviceIssue from '../assets/onlineOrder.png'
import { Image } from 'react-bootstrap'
import '../App.css'

const OnlineOrder = () => {
  return (
    <div style={{display:"grid", alignContent:"center", justifyItems:"center", padding:"2%"}} className='backgroundOnlineOrder'>
      <Image src={serviceIssue} style={{borderRadius:"20px", marginBottom:"1%"}}/>
      <p style={{fontFamily:"Markazi", fontSize:"24px", fontWeight:"bold", backgroundColor:"#F4CE14", padding:"1%", borderRadius:"20px"}}>We are not accepting any orders as of now.</p>
    </div>
  )
}

export default OnlineOrder