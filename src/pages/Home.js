import React from "react";
import Layout from "../components/Layout";
import { Flex, Box, Text, Divider, Image } from "@chakra-ui/react";
import SlickSlider from "../components/SlickSlider";
import mainImage from '../assets/healimg.jpeg';

const Home = () => {

    return (
        <Layout>
            <Flex 
            direction='column'
            p={5}
            gap={3}
            >
                <Flex
                direction='column'
                p={2}
                alignItems='center'
                gap={1}
                >
                    <Text fontSize='xl' fontWeight='bold' textAlign='center'>
                        Welcome to Healing Mentor!
                    </Text>
                    <Image src={mainImage} alt='main entrance image' objectFit='cover' w='300px' h='200px' p={3} />
                </Flex>
                
                <Divider orientation='horizontal' borderColor='gray.400' />

                <Flex
                direction='column'
                // bg='gray.300'
                p={2}
                alignItems='center'
                >
                    <Text fontSize='lg' fontWeight='bold' textAlign='center'>
                        Testimonial
                    </Text>
                    <Box w='350px' h='200px' p={5} m={2} >
                        <SlickSlider />
                    </Box>
                </Flex>
            </Flex>
        </Layout>
    );
};

export default Home;