import React from 'react';
import styled from 'styled-components';


const Navbar = () => {

    return (

        
        <Container>
        <Hr />  
        <Nav>
        <Logo > <Img src="https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/logo_b53b4862.svg" alt=""/>      
        </Logo>  
        <Navmenu>
        <NavLink to = "/lifestyle">lifestyle</NavLink>
        <NavLink to = "/design">Design</NavLink>
        <NavLink to = "/the-studio">The Studio</NavLink>
        <NavLink to = "/netflix-show">Netflix Show</NavLink>
        <NavLink to = "/shop">Shop</NavLink>
        <NavLink to = "/videos">Videos</NavLink>
        <NavLink to = "/contact">Contact</NavLink>
        <SearchLogo>
        <Img src="https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/icon-search_1be8cefa.svg" alt=""/>
        </SearchLogo>

        </Navmenu>  

         
        </Nav>

        <Hr />      
        </Container>
        
    )
}

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin: 35px 0 0 0;
background-color: #ffffff;`

const Hr = styled.hr`
width: 100%;
height: 0.5px;
background-color: #000000;
margin:0;`


const Nav = styled.nav`
display:flex;
flex-direction:row;
justify-content: space-between;
width:95%`

const Logo = styled.div`
display:flex;
justify-content:center;
align-items:center;
color:#3f3f3f;
`

const Img = styled.img`
cursor:pointer;

&:hover {
    filter: blur(0.4px);
}`


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
font-size:15px;
padding: 20px;
cursor: pointer;

&:hover {
    border-bottom: 2px solid transparent !important;
    padding-bottom: 3px;
    animation: animated 2s linear;
    
    @keyframes animated {
    0%{
        border-bottom: 2px solid transparent !;
    }
    20%{
        border-bottom: 2px solid #3f3f3f;
    }
    }
}`

const SearchLogo = styled.div`
padding:20px;
margin-left: 8px;`

export default Navbar;