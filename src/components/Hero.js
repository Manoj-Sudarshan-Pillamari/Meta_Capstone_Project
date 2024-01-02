import React from 'react'
import { Image } from '@chakra-ui/react'
import heroImage from '../assets/food/food1.png'
import Menu from './Menu'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div style={{ backgroundColor: "#495E57", color: "white", display: "flex", padding:"10px 25px 10px 25px", alignItems:"center", justifyContent:"center", maxHeight:"100%" }}>
            <div>
                <p style={{ color: '#F4CE14', fontSize: "64px", fontFamily: "Markazi", margin:"0" }}>Little Lemon</p>
                <p style={{ fontFamily: "Markazi", fontSize: "40px", margin:"0" }}>Chicago</p>
                <p style={{ fontSize: "18px", fontFamily: "Karla", maxWidth:"30%" }}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link className='action-button' to="/Reservation">Reserve a Table</Link>
            </div>
            <Image src={heroImage} borderRadius="20px" boxSize="20%"/>
        </div>
    )
}

export default Hero