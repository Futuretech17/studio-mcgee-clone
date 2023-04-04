import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterDiv className="footer">
            <FooterHeader>
                <img className="firstImg"src='https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/StudioMcGeeWhite_2x_51b5f312.png' alt=''></img>
                <div className='formImg'>
                <form action=''>
                <label className="formLabel" for="">Join Our Mailing List</label>
                <input type='text' />
                <label className="lastLabel" for="">SUBMIT</label>
                <input type='hidden'></input>
                </form>
                <img className="footerHeaderImg"src='https://studio-mcgee.com/app/themes/studio-mcgee/dist/images/icon-arrow-white_ed904aba.svg' alt='' />
                </div>
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
                        <p>@ STUDIO MCGEE <span>  |  </span> MADE BY BENJIE</p>
                    </div>
                </SocialLinks>
            </FooterContent>
        </FooterDiv>
    )
}


const FooterDiv =styled.div`
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
align-items: center;
width:100%;
padding-right: 15px;
padding-left: 15px;
margin: 20px 30px 30px 30px;
position:relative;
white-space: nowrap;

.formImg{
    position:relative;
    margin-left: 150px;
}

.firstImg{
    
    left:30px;
}

.footerHeaderImg {
    margin-left: 15px;
    padding:2px;
    position:absolute;
    bottom: 0;
    right: 0;
    
    

    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
}
img{
    width: auto;
    height: 15px;
    color:#d1d1d1;
    
    
}

form {
    margin-left: 100px;
    color:#ececec;
    margin-right: 50px;

    .formLabel{
        font-family: GT, san-serif;
        font-size:19px;
        font-weight: normal;
        line-height:19px;
        letter-spacing: 1.2px;
        transform: scale(1, 1.2);
        margin-right: 20px;
        vertical-align:bottom;
    }
    
    .lastLabel {
        margin-left: 20px;
        font-family:forma-djr-text, sans-serif;
        font-size:10px;
        font-weight:500;
        line-height:16px;
        letter-spacing: 1.42px;
        vertical-align:bottom;
    }

    input[type=text] {
        border: none;
        border-bottom: 1px solid #ececec;
        background-color:#303030;
        vertical-align:text-bottom;
    }
    input[type=submit] {
        border: none;
        border-bottom: 1px solid #ececec;
        background-color:#303030;
        margin-left:20px;

    }
}
`
const Hr = styled.hr`
width: 100%;
height: 1.6px;
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
margin-top: 30px;

h3 {
    font-family: GT, serif;
    font-size:19px;
    font-weight:500px;
    color:#ececec;
    margin-left:30px;
    margin-bottom:20px;
    transform: scale(1, 1.2);
    letter-spacing: 1.2px;
}

ul {

}

ul li {
    list-style-type: none;
    font-family: forma-djr-text,sans-serif;
    font-size:10px;
    font-weight: 500;
    line-height:18px;
    color:#ececec;
    letter-spacing:1.94px;
    
}`

const TheStudio =styled.div`

`
const Articles = styled.div``
const QuickLinks = styled.div``

const SocialLinks = styled.div`
font-family: forma-djr-text,sans-serif;
font-size: 10px;
font-weight:400;
line-height:16px;
display: flex;
flex-direction: column;
align-items:start;
justify-content:space-between;
margin-right: 30px;


.firstdiv{
    display:flex;
    justify-content:space-between;
    white-space:nowrap;

    img{
        width: 50%;
        height: 15px;
        color:#d1d1d1;
        font-size:16px;
    }

    a{
        color:#ececec;
        text-decoration: none;
        margin-left: 10px;

        &:hover{
            opacity: 0.8;
        }
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
    letter-spacing: 1.94px;

    span{
        padding: 0 5px;
    }
  
}

`
    
export default Footer;