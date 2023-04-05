import React from 'react';
import styled from 'styled-components'; 

const ImageCard = (props)=> {
    return (
        <Card>
            <img src={props.img} alt={props.alt}/>
        </Card>
    )
}

const Card = styled.div`
    object-fit:cover;
    height:100%;
    width:100%;

`

export default ImageCard;