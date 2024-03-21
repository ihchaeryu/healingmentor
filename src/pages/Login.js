import { React, useState, useContext } from "react";
import { Flex, Text, Divider, Input, InputGroup, InputRightElement, Button, Spacer, Link, } from "@chakra-ui/react";
import { ArrowBackIcon, } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import UserContext from '../contexts/userContext';

const Login = () => {

    // api
    // const apiUrl = process.env.API_URL;

    // input handling
    const [inputId, setInputId] = useState('');
    const [inputPwd, setInputPwd] = useState('');

    const onChangeId = (e) => {
        setInputId(e.target.value);
    };
    const onChangePwd = (e) => {
        setInputPwd(e.target.value);
    };

    // password handling
    const [pwShow, setPwShow] = useState(false)
    const handlePwShowClick = () => setPwShow(!pwShow)

    // clear all inputs
    const clearAllInputs = () => {
        setInputId('');
        setInputPwd('');
    };

    // go back handling
    const navigate = useNavigate();

    const toast = useToast();
    // login failed toast
    const showLoginFailToast = () => {
        toast({
            title: 'Log In Failed',
            description: "Log in has failed. Please try again.",
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
    };

    // Access user context
    const { login } = useContext(UserContext);

    // // login handling using proxy
    // const onConfirmLogin = () => {
    //     axios({
    //         method: 'post',
    //         maxBodyLength: Infinity,
    //         url: '/api/v1/user/auth/login',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         data: { username: inputId, password: inputPwd },
    //     }).then(res => {
    //         console.log(res);
    //         // set user context
    //         setUser({
    //             ...user,
    //             username: res.data.user,
    //             accessToken: res.data.token.access,
    //             refreshToken: res.data.token.refresh
    //         })
    //         navigate('/'); // to main page
    //     }).catch(err => {
    //         console.log(err);
    //         showLoginFailToast();
    //         clearAllInputs();
    //     });
    // };

    const onHandleLogin = () => {
        // use userContext login function
        login(inputId, inputPwd)
        .then(accessToken => {
            // login successful
            navigate('/');
        })
        .catch(err => {
            console.error(err);
            showLoginFailToast();
            clearAllInputs();
        })
    }

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
                    <Input 
                    placeholder='Username' 
                    value={inputId}
                    onChange={onChangeId}
                    />
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={pwShow ? 'text' : 'password'}
                            placeholder='Password'
                            value={inputPwd}
                            onChange={onChangePwd}
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
                    <Button onClick={onHandleLogin}>
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
                <Text fontSize='sm'>
                    Don't have an account?{' '}
                    <Link as={RouterLink} to='/signup' color='red' >
                        Sign Up
                    </Link>
                </Text>
            </Flex>
        </Flex>
    );
};

export default Login;