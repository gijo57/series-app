import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  color: #3757A1;
  background: #D3DEF8;
  font-size: 1em;
  font-family: roboto;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #3757A1;
`

const Div = styled.div`
  background: linear-gradient(to bottom, #5373BB, #feffff) center;
  border: 1px solid #5373BB;
`

const Navbar = () => {
    const padding = { padding: 5 }

    return (
        <Div>
            <Link style={padding} to="/">Home</Link>
            <Link style={padding} to="/series">Series</Link>
            <Button>Log out</Button>
        </Div>        
    )
}

export default Navbar