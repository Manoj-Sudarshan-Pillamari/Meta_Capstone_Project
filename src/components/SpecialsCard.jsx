import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom'

const SpecialsCard = (props) => {

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    fontWeight:"bold"
  };

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='3%' overflow='hidden' border="solid" boxSize="550px">
      <Image src={props.imgSrc} height="300px" width="100%" />
      <Box p='10'>
        <div style={{ display: "flex", justifyContent:"space-between" }}>
          <p style={{ fontFamily: "Markazi", fontSize: "24px", fontWeight:"bold" }}>{props.name}</p>
          <p style={{ color: "orange", alignSelf:"center" }}>${props.price}</p>
        </div>
        <p>{props.description}</p>
        <Link to="/Order" style={linkStyle}>Order a delivery</Link>
      </Box>
    </Box>
  )
}

export default SpecialsCard