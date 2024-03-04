import React from "react";
import Layout from "../components/Layout";
import { Flex, Box, Text, Divider } from "@chakra-ui/react";

const Home = () => {

    return (
        <Layout>
            <Flex 
            direction='column'
            bg='gray.100'
            p={5}
            gap={3}
            >
                <Flex
                direction='column'
                bg='gray.300'
                p={2}
                alignItems='center'
                >
                    <Text fontSize='xl' fontWeight='bold' textAlign='center'>
                        Welcome to Healing Mentor!
                    </Text>
                    <Box as="img" src='' alt='main entrance image' w='300px' h='200px' />
                </Flex>
                <Divider orientation='horizontal' />
            </Flex>
        </Layout>
    );
};

export default Home;