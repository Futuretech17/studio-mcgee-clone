import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import ImageCard from "./Imagecard";
import NavList from "./NavList";

const Navanimated = () => {

    return (
        <Container>
            <Links>
                <NavList 
                    href=""
                    title="LIFESTYLE"
                />
                <NavList 
                    href=""
                    title="THE SUNDAY 7"
                />
            </Links>
            <Description>
                <InnerDiv>
                <ImageCard 
                    img = 'https://studio-mcgee.com/app/uploads/2023/02/studiomcgee_SummerCatalogue_web_160-scaled-318x212.jpeg?theia_smart_thumbnails_file_version=2'
                />
                <ImageCard 
                    img = 'https://studio-mcgee.com/app/uploads/2023/03/McGeeCo_Spring_2023_Office_003_web-318x212.jpeg'
                />
                </InnerDiv>

            </Description>
        </Container>
    )

}

const Links = styled.div`
width:50%;`

const Description = styled.div`
display:flex;
flex-direction:row;
width: 50%;
`
const InnerDiv = styled.div`
display:flex;
flex-direction:row;
width: 70%;`

const Container = styled.div`
display:flex;
flex-direction:row;
width:100%;
z-index: 1000;
background-color: #f8f7f3;
padding: 40px 0 60px 0; 
`


export default Navanimated;