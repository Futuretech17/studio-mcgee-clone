import React from 'react';
import styled from 'styled-components';


const Navbar = () => {

    return (

        <Container>

        <Nav>
        <Logo>STUDIO MCGEE</Logo>  
        <Navmenu>
        <NavLink to = "/lifestyle">lifestyle</NavLink>
        <NavLink to = "/design">Design</NavLink>
        <NavLink to = "/the-studio">The Studio</NavLink>
        <NavLink to = "/netflix-show">Netflix Show</NavLink>
        <NavLink to = "/shop">Shop</NavLink>
        <NavLink to = "/videos">Videos</NavLink>
        <NavLink to = "/contact">Contact</NavLink>

        </Navmenu>          
        </Nav>
        </Container>
    )
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items: center;
margin: 30px 0 0 0;`

const Nav = styled.nav`
display:flex;
flex-direction:row;
justify-content: space-between;
width:90%`

const Logo = styled.div`
display:flex;
justify-content:center;
align-items:center;`

const Navmenu = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
min-width:700px;
width:50vw;`

const NavLink = styled.a`
text-decoration:none;
color: #3f3f3f;
font-family: GT,serif;
padding: 20px`

export default Navbar;