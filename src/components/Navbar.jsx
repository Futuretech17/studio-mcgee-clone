import React from 'react';
import styled from 'styled-components';

// import {Link} from "react-router-dom"
// import 


const Navbar = () => {

    return (

        
        <Container>
        <Hr />  
        <Nav>
        <Logo > <Img src="https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/logo_b53b4862.svg" alt=""/>      
        </Logo>  
        <Navmenu>
        <NavLink to = "/lifestyle"><span>Lifestyle</span></NavLink>
        <NavLink to = "/design"><span>Design</span></NavLink>
        <NavLink to = "/the-studio"><span>The Studio</span></NavLink>
        <NavLink to = "/netflix-show"><span>Netflix Show</span></NavLink>
        <NavLink to = "/shop"><span>Shop</span></NavLink>
        <NavLink to = "/videos"><span>Videos</span></NavLink>
        <NavLink to = "/contact"><span>Contact</span></NavLink>
        <SearchLogo>
        <Img src="https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/icon-search_1be8cefa.svg" alt=""/>
        </SearchLogo>

        <div className='hamburger'>
            <span></span>
            <span></span>
            <span></span>
        </div>

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
background-color: #ffffff;

`

const Hr = styled.hr`
width: 100%;
height: 0.5px;
background-color: #000000;
margin:0;`


const Nav = styled.nav`
display:flex;
flex-direction:row;
justify-content: space-between;
width:95%;
height: 56px;`

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
align-items:center;
min-width:700px;
width:50vw;
white-space:nowrap;
max-width:100vw;

.hamburger {
    display: none;
    cursor: pointer;

    span {
        display: block;
        width: 20px;
        height: 1px;
        margin-bottom: 5px;
        background-color: #3f3f3f;
      
      &:last-child {
        margin-bottom: 0;
    }}
    @media (max-width: 992px) {
    Navmenu {
        width:100vw;
    }
    display:block;
}  
}


`

const NavLink = styled.a` 

    position:relative;
    text-decoration:none;
    color: #474747;
    font-family: forma-djr-text,serif;
    font-variant: full-width;
    font-size:15px;
    padding: 15px;
    white-spacing:no-wrap;
    font-weight:300;
    font-style:normal;
    line-height: 16px;


    span {
    display: inline-block;
    position: relative;
  }

    span::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -15px;
    left: 0;
    background-color: #474747;
    transition: width 0.3s ease-in-out;
    }

    &:hover
    span::before {
    width: 100%;}
    
@media (max-width: 992px){
    display: none;
}
`

const SearchLogo = styled.div`
padding:20px;
margin-left: 8px;

@media (max-width: 992px){

    position: relative;
    right:0;
}`



export default Navbar;