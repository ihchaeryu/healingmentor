import { React, useState } from "react";
import { Flex, Text, Divider, Input, InputGroup, InputRightElement, Button, Spacer, Link, } from "@chakra-ui/react";
import { ArrowBackIcon, } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const SignupDone = () => {

    const navigate = useNavigate();

    return (
        <Flex
        direction='column'
        p={5}
        gap={3}
        h='100vh'
        >
            <Flex
            direction='row'
            justifyContent='flex-start'
            gap={3}
            >
                <ArrowBackIcon boxSize={6} onClick={() => navigate(-1)} />
                <Text fontSize='md' fontWeight='bold' alignSelf='center' >
                    Sign Up
                </Text>
            </Flex>
            <Divider />
            <Flex
            direction='column'
            paddingY={2}
            gap={7}
            >
                <Flex
                direction='column'
                gap={2}
                >
                    <Text fontSize='xl' fontWeight='bold' >
                        Registeration Completed!
                    </Text>
                    <Text fontSize='sm'>
                        Now you can use full service of Healing Mentor!
                    </Text>
                </Flex>

                <Flex
                direction='column'
                gap={5}
                >
                    <Button as={RouterLink} to='/'>
                        GO BACK TO HOME
                    </Button>
                </Flex>
            </Flex>    
        </Flex>
    );

};

export default SignupDone;