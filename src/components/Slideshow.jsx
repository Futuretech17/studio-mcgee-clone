import React from 'react';
import styled from 'styled-components';

const SlideShow = (props) => {
    return (
        <Container>
            <Image>
            <img src={props.Image} alt='' />
            </Image>
            <Description>
            <a href=''>
            <Title>{props.Title}</Title>
            </a>
            <DescrptionHeading>{props.Heading}</DescrptionHeading>
            <DescriptionText>{props.Text}</DescriptionText>
            </Description>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction:row;
    height: 100%;
    width: 100%;
    
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }`

const Image = styled.div`
    width:50%;
    height: 515px;`


const Description = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    padding: 100px 100px;
    background-color: #f8f7f3;
    height: 515px;
    width:50%;
    
    a {
        text-decoration: none;
        color: #3f3f3f;
    }`
    

const Title = styled.div`
    font-family: forma-djr-text,sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 10px;
    letter-spacing: 1.94px;
    line-height: 16px;
    padding-bottom:10px;`

const DescrptionHeading = styled.div`
    font-family: GT,serif;
    font-size: 47px;
    font-weight: 100;
    letter-spacing: 0;
    line-height: 49px;
    padding: 10px 0;
    
    

    &:hover{
        color: #474747;
        cursor:pointer;
    }`

const DescriptionText = styled.div`
    color: #3f3f3f;
    letter-spacing: 1px;
    font-family: forma-djr-text,serif;
    font-weight: 50;
    font-style: normal;
    font-size: 16px;
    line-height: 26px;
    padding-top: 10px;`
    
    

export default SlideShow;