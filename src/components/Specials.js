import { Button, Box, Image, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SpecialsCard from './SpecialsCard'
import greekSalad from "../assets/food/greek-salad.webp"
import bruchetta from '../assets/food/bruschetta.jpeg'
import lemonDesert from '../assets/food/lemon-dessert.webp'
import "../App.css"
import { Link } from 'react-router-dom'

const Specials = () => {

    return (
        <div>
            <div style={{ display: "flex", margin: "0", padding: "0", justifyContent: "space-around" }}>
                <p style={{fontFamily:"Markazi", fontSize:"64px", fontWeight:"bold"}}>This weeks specials!</p>
                 <Link className="action-button" to="/Menu">Online Menu</Link>
            </div>
            <HStack spacing="5%" padding="2% 5% 2% 5%">
                    <SpecialsCard imgSrc={greekSalad} name="Greek Salad" price="12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
                    <SpecialsCard imgSrc={bruchetta} name="Bruchetta" price="5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
                    <SpecialsCard imgSrc={lemonDesert} name="Lemon Dessert" price="6.49" description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
            </HStack>
        </div>
    )
}

export default Specials