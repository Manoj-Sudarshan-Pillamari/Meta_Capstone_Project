import React from 'react'
import { HStack } from '@chakra-ui/react'
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
    return (
        <div style={{ backgroundColor: "#ced3db", padding: "5%" }}>
            <p style={{ fontFamily: "Markazi", fontSize: "36px", fontWeight: "bold", textAlign: "center" }}>Testimonials</p>
            <HStack spacing="5%" padding="2% 5% 2% 5%">
                <TestimonialsCard name="Erling Haaland" reviewText="I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture." />
                <TestimonialsCard name="Lionel Messi" reviewText="The food here was fire!! Everyone should try this place out at least once if they live in Chicago." />
                <TestimonialsCard name="Cristiano Ronaldo" reviewText="I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here." />
                <TestimonialsCard name="Kylian Mbappé" reviewText="Great food, welcoming staff, cozy atmosphere. A great place to  treat your kids to." />
            </HStack>
        </div>
    )
}

export default Testimonials