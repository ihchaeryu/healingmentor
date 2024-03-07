import { React, useState } from "react";
import { Flex, Text, Divider, Input, InputGroup, InputRightElement, Button, Spacer, Link, } from "@chakra-ui/react";
import { ArrowBackIcon, } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Signup = () => {

    // password handling
    const [pwShow, setPwShow] = useState(false)
    const handlePwShowClick = () => setPwShow(!pwShow)

    // password confirm handling
    const [pwConfirmShow, setPwConfirmShow] = useState(false)
    const handlePwConfirmShowClick = () => setPwConfirmShow(!pwConfirmShow)

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
                        Getting Started
                    </Text>
                    <Text fontSize='sm'>
                        Be the proud member of Healing Mentor!
                    </Text>
                </Flex>

                <Flex
                direction='column'
                gap={3}
                >
                    <Input placeholder='Username' />
                    <Input placeholder='Email' />
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={pwShow ? 'text' : 'password'}
                            placeholder='Password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handlePwShowClick}>
                                {pwShow ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={pwConfirmShow ? 'text' : 'password'}
                            placeholder='Confirm password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handlePwConfirmShowClick}>
                                {pwConfirmShow ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                <Flex
                direction='column'
                gap={5}
                >
                    <Button>
                        REGISTER
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
                        Already have an account?{' '}
                        <Link as={RouterLink} to='/login' color='red' >
                            Log In
                        </Link>
                    </Text>
                </Link>
            </Flex>
        </Flex>
    );
};

export default Signup;