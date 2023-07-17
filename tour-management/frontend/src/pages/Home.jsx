import React from "react";
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap';
import img from '../assets/images/img01.jpg'
import img02 from '../assets/images/img02.jpg'
import Video from '../assets/images/Video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg  from '../assets/images/experience.png'
import Subtitle from './../shared/Subtitle';
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from '../shared/Newsletter'
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
const Home= ()=> {
    return <>
    {/*    Hero section */}
<section>
    <Container>
        <Row>
          
            <Col lg='6'>
                <div className = "hero__content">
                    <div className = "hero__subtitle d-flex align-items-center">
                        <Subtitle subtitle={'Know Before You Go'} />
                        <img src={worldImg} alt=" "/>
                    </div>
                    <h1> The Journey of a Thousand Miles begins with a{" "}<span className ="highlight">Single Step</span></h1>
                    <p>
                        Our Website can help you reach your dream destination and create more memories with your friends and families.
                        Here you have wide range of option to choose the best place to visit and vibe!!!!
                    
                    </p>
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box">
                    <img src={img} alt=""/>
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box mt-4" >
                    <video src={Video} alt="" controls/>
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box mt-5 ">
                    <img src={img02} alt=""/>
                </div>
            </Col>
            <SearchBar />
            </Row>

    </Container>
</section>
<section>
   <Container>
    <Row>
        <Col lg='3'>
            <h5 className="services__subtitle">What we serve?</h5>
            <h2 className="services__title">We offer our best services</h2>
        </Col>
        <ServiceList />
    </Row>
    </Container> 
</section>
<section>
    <Container>
        <Row>
            <Col lg='12' className="mb-5">
                <Subtitle subtitle={'Explore'} />
                <h2 className="featured__tour-title"> Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
        </Row>
    </Container>
</section>
{/* Experience section */}

<section>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="experience__content">
                    <Subtitle subtitle={"Experience"} />
                <h2>
                    With our all experience <br/> We will serve you </h2>
                    <p>We gave wings to help our happy customers to fullfil their dream of travelling the world like you</p>
            
                </div>
                <div className="counter__wrapper d-flex align-items-center gap 5">
                    <div className="counter__box">
                        <span>
                            12k+  
                        </span>
                        <h6>Successful Trip</h6>
                    </div>
                    
                <div className="counter__box">
                        <span>
                            2k+  
                        </span>
                        <h6>Regular clients</h6>
                    </div>
                <div className="counter__box">
                        <span>
                           15 
                        </span>
                        <h6>Years Experience</h6>
                    </div>

             </div>

            </Col>
            <Col lg="6">
              <div className="experience__img"  >
                <img src={experienceImg} alt=""> 
                {/* dont forget ti import  */}
                </img>
                </div>
            </Col>
        </Row>
    </Container>
</ section>
<section>
    <Container>
        <Row>
            <Col lg='12'>
                <Subtitle subtitle={'Gallery'} />
                <h2 className="gallery__title">Visit our customers tour gallery</h2>

            </Col>
            <Col lg="12">
                <MasonryImagesGallery/>
            </Col>
        </Row>
    </Container>
</section>
<section>
    <Container>
        <Row>
            <Col lg='12'>
             <Subtitle subtitle={'Fans Love'} />
             <h2 className="testimonial__title">What our fans say about us </h2>
            </Col>
            <Col lg="12">
                <Testimonials />
            </Col>
        </Row>
    </Container>
</section>
<Newsletter />
</>
};
export default Home;
