import { React, useState } from "react";
import { Flex, Text, Divider, Input, InputGroup, InputRightElement, Button, Spacer, Link, } from "@chakra-ui/react";
import { ArrowBackIcon, } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Login = () => {

    // password handling
    const [pwShow, setPwShow] = useState(false)
    const handlePwShowClick = () => setPwShow(!pwShow)

    // go back handling
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
                    Log In
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
                        Welcome Back
                    </Text>
                    <Text fontSize='sm'>
                        Log In to Continue
                    </Text>
                </Flex>

                <Flex
                direction='column'
                gap={3}
                >
                    <Input placeholder='Username' />
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={pwShow ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handlePwShowClick}>
                                {pwShow ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                <Flex
                direction='column'
                gap={5}
                >
                    <Flex
                    direction='row'
                    justifyContent='space-between'
                    >
                        <Text fontSize='sm'>
                            Remember Me
                        </Text>
                        <Text fontSize='sm'>
                            Forgot Password?
                        </Text>
                    </Flex>
                    <Button>
                        LOG IN
                    </Button>
                </Flex>

            </Flex>
            <Spacer />
            <Divider />
            <Flex
            direction='row'
            justifyContent='center'
            >
                <Link >
                    <Text fontSize='sm'>
                        Don't have an account?{' '}
                        <Link as={RouterLink} to='/signup' color='red' >
                            Sign Up
                        </Link>
                    </Text>
                </Link>
            </Flex>
        </Flex>
    );
};

export default Login;