import { useContext } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { Box, Flex, Link, Text, Image, Spacer, Icon, } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import defaultProfileImg from '../assets/profile_img.png';
import { CloseIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { PiHeartbeat } from "react-icons/pi";
import { MdLogin, MdLogout } from "react-icons/md";
import UserContext from '../contexts/userContext';

const DrawerMenu = ({ isOpen, onClose }) => {

    // Access user context
    const { user, setUser } = useContext(UserContext);

    // log out 
    const logOut = () => {
        setUser({
            ...user,
            username: '',
            accessToken: '',
            refreshToken: ''
        })
    };
    
    return (
        <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xs'>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px' bgColor='gray.800' paddingLeft={4}>
                <Flex direction='row' justifyContent='left' alignItems='center' gap={4}>
                    <Image 
                    src={defaultProfileImg} 
                    alt='default profile img' 
                    w='45px' h='45px' 
                    objectFit='cover' 
                    bgColor='white' 
                    borderRadius={8}
                    />
                    <Link as={RouterLink} to='/login'>
                        {user.accessToken !== '' ? (
                            <Text color='white' fontSize='md' fontWeight='bold' >
                                Hi, {user.username}!
                            </Text>
                        ) : (
                            <Text color='white' fontSize='md' fontWeight='bold' >
                                Login First
                            </Text>
                        )}
                    </Link>
                    <Spacer />
                    <CloseIcon color='white' boxSize={4} />
                </Flex>
            </DrawerHeader>
            <DrawerBody paddingX={0} paddingTop={0}>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton paddingY={3}>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Link as={RouterLink} to='/'>
                                        <Flex direction='row' justifyContent='left' alignItems='center' gap={2}>
                                            <Icon as={IoHomeOutline} boxSize={4} />
                                            <Text>Home</Text>
                                        </Flex>
                                    </Link>
                                </Box>
                            </AccordionButton>
                        </h2>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton paddingY={3}>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Flex direction='row' justifyContent='left' alignItems='center' gap={2}>
                                        <Icon as={HiOutlineUser} boxSize={4} />
                                        <Text>Account</Text>
                                    </Flex>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={0}>
                            <Flex direction='column' >
                                <Box as="span" flex='1' textAlign='left' borderY='1px' borderColor='gray.100' p={3} paddingLeft={4}>
                                    <Link as={RouterLink} to='/profile'>
                                        <Flex direction='row' justifyContent='left' alignItems='center' gap={2}>
                                            <Box boxSize={4}  />
                                            <Text>View My Profile</Text>
                                        </Flex>
                                    </Link>
                                </Box>
                                <Box as="span" flex='1' textAlign='left' borderY='1px' borderColor='gray.100' p={3} paddingLeft={4}>
                                    <Link as={RouterLink} to='/profile'> {/* link for now */}
                                        <Flex direction='row' justifyContent='left' alignItems='center' gap={2}>
                                            <Box boxSize={4}  />
                                            <Text>Account Settings</Text>
                                        </Flex>
                                    </Link>
                                </Box>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton paddingY={3}>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Flex direction='row' justifyContent='left' alignItems='center' gap={2}>
                                        <Icon as={PiHeartbeat} boxSize={4} />
                                        <Text>Meditation</Text>
                                    </Flex>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={0}>
                            <Flex direction='column' >
                                <Box as="span" flex='1' textAlign='left' borderY='1px' borderColor='gray.100' p={3} paddingLeft={4}>
                                    <Link as={RouterLink} to='/meditation/gm'>
                                        <Flex direction='row' justifyContent='left' alignItems='center' gap={2}>
                                            <Box boxSize={4}  />
                                            <Text>Guided Meditation</Text>
                                        </Flex>
                                    </Link>
                                </Box>
                                <Box as="span" flex='1' textAlign='left' borderY='1px' borderColor='gray.100' p={3} paddingLeft={4}>
                                    <Link as={RouterLink} to='/meditation/rg'>
                                        <Flex direction='row' justifyContent='left' alignItems='center' gap={2}>
                                            <Box boxSize={4}  />
                                            <Text>Respiratory Graph</Text>
                                        </Flex>
                                    </Link>
                                </Box>
                                <Box as="span" flex='1' textAlign='left' borderY='1px' borderColor='gray.100' p={3} paddingLeft={4}>
                                    <Link as={RouterLink} to='/meditation/sa'>
                                        <Flex direction='row' justifyContent='left' alignItems='center' gap={2}>
                                            <Box boxSize={4}  />
                                            <Text>Sustained Attention</Text>
                                        </Flex>
                                    </Link>
                                </Box>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton paddingY={3}>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Flex direction='row' justifyContent='left' alignItems='center' gap={2}>
                                        <QuestionOutlineIcon boxSize={4} />
                                        <Text>About Us</Text>
                                    </Flex>
                                </Box>
                            </AccordionButton>
                        </h2>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton paddingY={3}>
                                <Box as="span" flex='1' textAlign='left'>
                                    { user.accessToken !== '' ? (
                                        <Link as={RouterLink} to='/' onClick={logOut}>
                                            <Flex direction='row' justifyContent='left' alignItems='center' gap={2}>
                                                <Icon as={MdLogout} boxSize={4} />
                                                <Text>Log Out</Text>
                                            </Flex>
                                        </Link>
                                    ) : (
                                        <Link as={RouterLink} to='/login'>
                                            <Flex direction='row' justifyContent='left' alignItems='center' gap={2}>
                                                <Icon as={MdLogin} boxSize={4} />
                                                <Text>Log In</Text>
                                            </Flex>
                                        </Link>
                                    )}
                                </Box>
                            </AccordionButton>
                        </h2>
                    </AccordionItem>
                    
                </Accordion>
            </DrawerBody>
            <DrawerFooter>
                Dark Mode
            </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

}

export default DrawerMenu;