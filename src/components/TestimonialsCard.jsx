import React from 'react'
import Star from '../assets/star.png'
import { Box } from '@chakra-ui/react'

const TestimonialsCard = (props) => {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='3%' overflow='hidden' border="solid" padding="2%" boxSize="300px">
            <h3>Rating</h3>
            <img src={Star} alt="delivery Icon"></img>
            <h3>{props.name}</h3>
            <p>{props.reviewText}</p>
        </Box>
    )
}

export default TestimonialsCard