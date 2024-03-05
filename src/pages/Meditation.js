import React from "react";
import Layout from "../components/Layout";
import { Flex, Text, Image, Spacer, } from "@chakra-ui/react";
import mainImage from '../assets/healimg.jpeg'; // placeholder

const Meditation = () => {

    return (
        <Layout>
            <Flex 
            direction='column'
            bg='gray.100'
            p={5}
            gap={3}
            >
                <Flex
                direction='row'
                // bg='gray.200'
                borderWidth={1}
                borderColor='gray.400'
                borderRadius={10}
                p={5}
                alignItems='center'
                >
                    <Text fontSize='lg' fontWeight='bold'>
                        Guided Meditation
                    </Text>
                    <Spacer />
                    <Image src={mainImage} alt="guided meditation" w='120px' h='120px' objectFit='cover' />
                </Flex>

                <Flex
                direction='row'
                // bg='gray.200'
                borderWidth={1}
                borderColor='gray.400'
                borderRadius={10}
                p={5}
                alignItems='center'
                >
                    <Text fontSize='lg' fontWeight='bold'>
                        Respiratory Graph
                    </Text>
                    <Spacer />
                    <Image src={mainImage} alt="respiratory graph" w='120px' h='120px' objectFit='cover' />
                </Flex>

                <Flex
                direction='row'
                // bg='gray.200'
                borderWidth={1}
                borderColor='gray.400'
                borderRadius={10}
                p={5}
                alignItems='center'
                >
                    <Text fontSize='lg' fontWeight='bold'>
                        Sustained Attention
                    </Text>
                    <Spacer />
                    <Image src={mainImage} alt="sustained attention" w='120px' h='120px' objectFit='cover' />
                </Flex>

            </Flex>
        </Layout>
    );
};

export default Meditation;