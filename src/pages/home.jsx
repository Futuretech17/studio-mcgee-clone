import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SlideShow from '../components/Slideshow';
import styled from 'styled-components';
// import LargeCard from '../components/Largecard';
import ImageCard from '../components/Imagecard';



const HomePage = () => {

    return (
        <Container>
            
            <Navbar /> 
            
            
            <SlideShow 
                Image = "https://studio-mcgee.com/app/uploads/2023/02/studiomcgee_SummerCatalogue_web_160-scaled-2000x900.jpeg?theia_smart_thumbnails_file_version=2"
                Title = "LIFESTYLE"
                Heading ="Travel By Design | Luggage Roundup"
                Text = "We're firm believers in the benefits of travel, if only to experience the great design of the world. Here, how to do it in style."

            />  
            <LargeCard>
                <ImageCard 
                Image = "https://studio-mcgee.com/app/uploads/2023/01/McGeeCo_Spring_2023_Office_031_web-1-500x595.jpeg"
                />
                <ImageCard
                Image ='https://studio-mcgee.com/app/uploads/2023/01/studiomcgee_HilltopEstate_030_web-500x595.jpeg'
                 />
                <ImageCard 
                Image ='https://studio-mcgee.com/app/uploads/2023/01/McGeeCo_Spring_2023_Dining_Room_008_web-500x595.jpeg' 
                />
                
            
            </LargeCard>
            
            <Footer />
            
            
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    box-sizing: border-box;
    
    .relativePosition {
    position: relative;


}`

const LargeCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    box-sizing: border-box;
    padding: 0 30px;
    margin: 100px 0;

    `  



export default HomePage;