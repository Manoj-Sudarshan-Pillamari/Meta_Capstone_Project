import { Image, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagramSquare,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faTwitter,
    url: "https://twitter.com/",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/",
  },
  {
    icon: faInstagramSquare,
    url: "https://www.instagram.com/",
  },
];

const Footer = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
  };
  return (
    <div style={{ backgroundColor: "aliceblue", display: "flex", padding: "2% 5% 2% 5%", justifyContent:"space-evenly"}}>
      <Image src={footerLogo} boxSize="10%" />
      <VStack align="left">
        <p style={{ color: "#495E57", fontWeight: "bold" }}>Navigation</p>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/Menu" style={linkStyle}>Menu</Link>
        <Link to="/About" style={linkStyle}>About</Link>
        <Link to="/Reservation" style={linkStyle}>Reservation</Link>
        <Link to="/Order" style={linkStyle}>Online Order</Link>
      </VStack>
      <VStack align="left" padding={0} margin={0}>
        <p style={{ color: "#495E57", fontWeight: "bold" }}>Contact</p>
        <p style={{margin:"0"}}>Little Lemon Restaurant, Citrus Avenue, Chicago</p>
        <p style={{margin:"0"}}>+41 022 8888 8888</p>
        <p style={{margin:"0"}}>littlelemon@restaurant.com</p>
      </VStack>
      <VStack align="left">
      <p style={{ color: "#495E57", fontWeight: "bold" }}>Social Media</p>
      <HStack spacing={20}>
        {socials.map((data) => {
          return (
            <a href={data.url} key={data.url}>
              <FontAwesomeIcon icon={data.icon} size="2x" />
            </a>
          )
        })}
        </HStack>
      </VStack>
    </div>
  )
}

export default Footer
