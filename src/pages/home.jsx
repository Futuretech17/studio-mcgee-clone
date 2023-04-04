import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SlideShow from '../components/Slideshow';


const HomePage = () => {

    return (
        <div>
            <Navbar />  
            <SlideShow 
                Image = "https://studio-mcgee.com/app/uploads/2023/02/studiomcgee_SummerCatalogue_web_160-scaled-2000x900.jpeg?theia_smart_thumbnails_file_version=2"
                Title = "LIFESTYLE"
                Heading ="Travel By Design | Luggage Roundup"
                Text = "We're firm believers in the benefits of travel, if only to experience the great design of the world. Here, how to do it in style."

            />  
            <Footer />
        </div>
    )

}

export default HomePage;