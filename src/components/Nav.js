import React from 'react'
import navlogo from '../assets/nav-logo.png'
import '../App.css'
import { Link } from 'react-router-dom'
import { Flex, Box, Image, Spacer, HStack } from '@chakra-ui/react'

const Nav = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    fontWeight: "bolder"
  };

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' borderBottom="solid 2px" boxShadow="0px 2px 5px grey" padding="20px 100px 20px 100px">
      <Link to="/" style={linkStyle}><Image src={navlogo} htmlWidth="25%" paddingLeft="2%" /></Link>
      <HStack spacing='50px'>
        <Link to="/" style={linkStyle}>HOME</Link>
        <Link to="/Menu" style={linkStyle}>MENU</Link>
        <Link to="/About" style={linkStyle}>ABOUT</Link>
        <Link to="/Reservation" style={linkStyle}>RESERVATION</Link>
        <Link to="/Order" style={linkStyle}>ONLINE ORDER</Link>
      </HStack>
    </Flex>
  )
}

export default Nav