import React from 'react';
import Slider from 'react-slick';
import { Center, Text, } from '@chakra-ui/react';
import './SlickSlider.css';

const SlickSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return (
        <Slider {...settings}>
            <div className='slide'>
                <Center bg='green' w='300px' h='120px'>
                    <Text textColor='white'>1</Text>
                </Center>
            </div>
            <div className='slide'>
                <Center bg='purple' w='300px' h='120px'>
                    <Text textColor='white'>2</Text>
                </Center>
            </div>
            <div className='slide'>
                <Center bg='blue' w='300px' h='120px'>
                    <Text textColor='white'>3</Text>
                </Center>
            </div>
            <div className='slide'>
                <Center bg='orange' w='300px' h='120px'>
                    <Text textColor='white'>4</Text>
                </Center>
            </div>
        </Slider>
    );
};

export default SlickSlider;