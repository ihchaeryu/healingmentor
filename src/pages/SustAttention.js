import React from "react";
import Layout from "../components/Layout";
import { Flex, Text, } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

const SustAttention = () => {

    return (
        <Layout>
            <Flex
            direction='column'
            p={4}
            gap={5}
            >
                <Flex
                direction='row'
                justifyContent='flex-start'
                alignItems='flex-end'
                >
                    <Text fontSize='2xl' fontWeight='bold'>
                        Sustained Attention
                    </Text>
                    <QuestionOutlineIcon boxSize={4} m={2} color='blue' />
                </Flex>

                <Flex
                direction='column'
                borderWidth={1}
                borderColor='gray.300'
                borderRadius={10}
                h='400px'
                >

                </Flex>
            </Flex>
        </Layout>
    );
};

export default SustAttention;