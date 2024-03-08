import React from "react";
import Layout from "../components/Layout";
import { Flex, Text, Image, Spacer, Link, } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import mainImage from '../assets/healimg.jpeg'; // placeholder

const Meditation = () => {

    return (
        <Layout>
            <Flex 
            direction='column'
            p={5}
            gap={3}
            >
                <Link as={RouterLink} to='/meditation/gm'>
                    <Flex
                    direction='row'
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
                </Link>

                <Link as={RouterLink} to='/meditation/rg'>
                    <Flex
                    direction='row'
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
                </Link>

                <Link as={RouterLink} to='/meditation/sa'>
                    <Flex
                    direction='row'
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
                </Link>

            </Flex>
        </Layout>
    );
};

export default Meditation;