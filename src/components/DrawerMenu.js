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
import { Box, Flex, } from '@chakra-ui/react';

const DrawerMenu = ({ isOpen, onClose }) => {
    
    return (
        <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xs'>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>Login First</DrawerHeader>
            <DrawerBody>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Home
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
                                    Log In
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