import { React, useState, useContext, useEffect } from "react";
import { Flex, Text, Divider, Input, InputGroup, InputRightElement, Button, Spacer, Link, Icon, } from "@chakra-ui/react";
import { ArrowBackIcon, } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import UserContext from '../contexts/userContext';
import { BiShow, BiHide } from "react-icons/bi";

const Signup = () => {

    // input handling
    const [inputId, setInputId] = useState('');
    const [inputPwd, setInputPwd] = useState('');
    const [inputPwdConfirm, setInputPwdConfirm] = useState('');

    const onChangeId = (e) => {
        setInputId(e.target.value);
    };
    const onChangePwd = (e) => {
        setInputPwd(e.target.value);
    };
    const onChangePwdConfirm = (e) => {
        setInputPwdConfirm(e.target.value);
    };

    // clear all inputs
    const clearAllInputs = () => {
        setInputId('');
        setInputPwd('');
        setInputPwdConfirm('');
    };

    // password show handling
    const [pwShow, setPwShow] = useState(false)
    const handlePwShowClick = () => setPwShow(!pwShow)

    // go back handling
    const navigate = useNavigate();

    // pwd not matching toast
    const toast = useToast();
    const showPwdUnmatchToast = () => {
        toast({
            title: 'Password Confirmation',
            description: "The two password fields do not match.",
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
    };
    // signup failed toast
    const showSignupFailToast = () => {
        toast({
            title: 'Sign Up Error',
            description: "There has been an error. Please try again.",
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
    };

    // Access user context
    const { signup } = useContext(UserContext);

    // // signup request handling using proxy
    // const onConfirmSignup = () => {
    //     axios({
    //         method: 'post',
    //         maxBodyLength: Infinity,
    //         url: '/api/v1/user/auth/signup',
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
    //         navigate('/signup/success');
    //     }).catch(err => {
    //         console.log(err);
    //         showSignupFailToast();
    //         clearAllInputs();
    //     });
    // };

    // // Log user when it changes :: for debugging
    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

    // register button clicked
    const handleRegister = () => {
        // check pwd consistancy
        if (inputPwd === inputPwdConfirm) {
            signup(inputId, inputPwd)
            .then(accTok => {
                // signup successful
                navigate('/signup/success');
            })
            .catch(err => {
                console.error(err);
                showSignupFailToast();
                clearAllInputs();
            })
        } else {
            clearAllInputs();
            showPwdUnmatchToast();
        }
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
                        <InputRightElement width='3rem'>
                            <Button h='1.75rem' size='sm' onClick={handlePwShowClick} variant='ghost'>
                                { pwShow ? <Icon as={BiShow} boxSize={5}/> : <Icon as={BiHide} boxSize={5}/> }
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={pwShow ? 'text' : 'password'}
                            placeholder='Confirm Password'
                            value={inputPwdConfirm}
                            onChange={onChangePwdConfirm}
                        />
                        <InputRightElement width='3rem'>
                            <Button h='1.75rem' size='sm' onClick={handlePwShowClick}>
                                { pwShow ? <Icon as={BiShow} boxSize={5}/> : <Icon as={BiHide} boxSize={5}/> }
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                <Flex
                direction='column'
                gap={5}
                >
                    <Button onClick={handleRegister}>
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
                <Text fontSize='sm'>
                    Already have an account?{' '}
                    <Link as={RouterLink} to='/login' color='red' >
                        Log In
                    </Link>
                </Text>
            </Flex>
        </Flex>
    );
};

export default Signup;