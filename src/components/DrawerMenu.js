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
import { Box, Flex, Link, Text, Image, Spacer, } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import defaultProfileImg from '../assets/profile_img.png';
import { CloseIcon } from '@chakra-ui/icons';

const DrawerMenu = ({ isOpen, onClose }) => {
    
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
                    <Text color='white' fontSize='md' fontWeight='bold' >Login First</Text>
                    <Spacer />
                    <CloseIcon color='white' boxSize={4} />
                </Flex>
            </DrawerHeader>
            <DrawerBody>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Link as={RouterLink} to='/'>
                                        <Text>Home</Text>
                                    </Link>
                                </Box>
                            </AccordionButton>
                        </h2>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Account
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex direction='column' >
                                <Box as="span" flex='1' textAlign='left' borderY='1px' borderColor='gray.200' p={2}>
                                    View My Profile
                                </Box>
                                <Box as="span" flex='1' textAlign='left' borderY='1px' borderColor='gray.200' p={2}>
                                    Account Settings
                                </Box>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Meditation
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex direction='column' >
                                <Box as="span" flex='1' textAlign='left' borderY='1px' borderColor='gray.200' p={2}>
                                    Respiratory Graph
                                </Box>
                                <Box as="span" flex='1' textAlign='left' borderY='1px' borderColor='gray.200' p={2}>
                                    Sustained Attention
                                </Box>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    About Us
                                </Box>
                            </AccordionButton>
                        </h2>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Link as={RouterLink} to='/login'>
                                        <Text>Log In</Text>
                                    </Link>
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