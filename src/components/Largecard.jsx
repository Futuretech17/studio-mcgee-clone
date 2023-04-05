import React from 'react';
import styled from 'styled-components';
import ImageCard from './Imagecard';

const LargeCard = (props) => {
    return (
        <LargeCardContainer>
        <ImageCard {...props} />
        <ImageCard {...props} />
        <ImageCard {...props} />
        </LargeCardContainer>
    )
}

const LargeCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 560px;
    width: 100%;
    padding: 0 30px; `

export default LargeCard;