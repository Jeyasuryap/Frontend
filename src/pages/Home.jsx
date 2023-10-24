import React from 'react'
import {Container} from 'react-bootstrap'
import "../styles/Home.css"

const Home = () => {
  return (
    <Container>
        <h1>Welcome to our Website</h1>
        <p>We are here to serve you</p>
        <button variant="primary" type='submit'>Get Started</button>

    </Container>
  )
}

export default Home