import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterDiv className="footer">
            <FooterHeader>
                <img src='https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/StudioMcGeeWhite_2x_51b5f312.png' alt=''></img>
                <form action=''>
                <label for="">Join Our Mailing List</label>
                <input type='text' />
                <label for="">Submit</label>
                <input type='submit'/>
                </form>
            </FooterHeader>
            <Hr />
            <FooterContent>
                <TheStudio>
                    <h3>The Studio</h3>
                    <ul>
                        <li>THE STUDIO</li>
                        <li>PROJECTS</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>ENQUIRE</li>
                    </ul>
                </TheStudio>
                <Articles>
                    <h3>Articles</h3>
                    <ul>
                        <li>DESIGN TIPS</li>
                        <li>STYLING</li>
                        <li>ROOM INSPIRATION</li>
                    </ul>
                </Articles>
                <QuickLinks>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>WATCH</li>
                        <li>NETFLIX SHOW</li>
                        <li>SHOW</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </QuickLinks>
                <SocialLinks>
                    <div className='firstdiv'>
                        <img src='https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/McGeeandCo_Logo_White@2x_422094f2.png' alt='' />
                        <a href='https://www.mcgeeandco.com/?utm_source=studio-mcgee&utm_medium=referral&utm_campaign=footerlink'>SHOP NOW</a>
                        <img src='https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/icon-arrow-white_ed904aba.svg' alt='' />
                    </div>
                    <div className='seconddiv'> 
                        <a href="https://www.instagram.com/studiomcgee/" alt="">
                        <img src='https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/social/insta_92e21b29.svg' alt='' />
                        </a>
                        <a href="https://www.pinterest.com/shea_mcgee/" alt="">
                        <img src='https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/social/pinterest_4494da36.svg' alt='' />
                        </a>
                        <a href="https://www.facebook.com/StudioMcGee/" alt="">
                        <img src='https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/social/facebook_d037c366.svg' alt='' />
                        </a>
                        <a href="https://www.tiktok.com/@studio.mcgee" alt="">
                        <img src='https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/social/tiktok_732b0ae7.svg' alt='' />
                        </a>
                        <a href="https://www.youtube.com/channel/UCXvzpK4eKUJysEZ42zjTUdw" alt=""> 
                        <img src='https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/social/youtube_f57fd946.svg' alt='' />
                        </a>
                        
                    </div>
                    <div className='thirddiv'>
                        <p>@ STUDIO MCGEE</p>
                        <p>MADE BY BENJIE</p>
                    </div>
                </SocialLinks>
            </FooterContent>
        </FooterDiv>
    )
}


const FooterDiv =styled.div`
position:fixed;
bottom:0;
display:flex;
flex-direction:column;
padding-bottom: 50px;
margin-top: 50px;
width: 100%;
height:auto;
background-color: #303030;
display: flex;
justify-content: center;
align-items: center;
`

const FooterHeader = styled.div`

display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width:100%;
padding-right: 15px;
padding-left: 15px;
margin: 25px 30px;

img{
    width: auto;
    height: 15px;
    color:#d1d1d1;
}

form {
    color:#ececec;
    input[type=text] {
        border: none;
        border-bottom: 1px solid #ececec;
        background-color:#303030;
    }
    input[type=submit] {
        border: none;
        border-bottom: 1px solid #ececec;
        background-color:#303030;

    }
}
`
const Hr = styled.hr`
width: 100%;
height: 1.5px;
background-color: #ffffff;
margin:0;`

const FooterContent = styled.div`
width: 100%;
justify-content: space-between;
display:flex;
flex-direction: row;
color:#ececec;
margin-right: 15px;
margin-left: 15px;

ul {

}

ul li {
    list-style-type: none;
    
}`

const TheStudio =styled.div`

`
const Articles = styled.div``
const QuickLinks = styled.div``
const SocialLinks = styled.div`
display:flex;
flex-direction: column;
align-items: space-between;
height:100%;

.firstdiv{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;

    img{
        width: auto;
        height: 15px;
        color:#d1d1d1;
    }

    a{
        color:#ececec;
        text-decoration: none;
    }

}

.seconddiv{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:70%;
}

.thirddiv{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  
}

`
    
export default Footer;