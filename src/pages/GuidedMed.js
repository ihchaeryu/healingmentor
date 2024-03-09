import { React, useState } from "react";
import Layout from "../components/Layout";
import { Flex, Text, Button, Progress, } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
import { QuestionOutlineIcon, ChevronDownIcon } from "@chakra-ui/icons";

const GuidedMed = () => {

    const [lecture, setLecture] = useState(0);
    const lectures = ["Select Lecture to Listen", "1. Body Scan", "2. Respiratory Meditation", "3. Mindfulness Meditation"];
    const handleLectureClick = (n) => {
        setLecture(n);
    };

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
                        Guided Meditation
                    </Text>
                    <Popover>
                        <PopoverTrigger>
                            <QuestionOutlineIcon as='Button' boxSize={4} m={2} color='blue' />
                        </PopoverTrigger>
                        <PopoverContent boxShadow='2xl'>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Instructions</PopoverHeader>
                            <PopoverBody>heyy</PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>

                <Flex
                direction='column'
                borderWidth={1}
                borderColor='gray.300'
                borderRadius={10}
                justifyContent='center'
                p={5}
                gap={3}
                >
                    <Flex
                    direction='row'
                    justifyContent='space-between'
                    >
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontWeight='regular' variant='outline' justifySelf='stretch'>
                                {lectures[lecture]}
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => handleLectureClick(0)}>Select Lecture to Listen</MenuItem>
                                <MenuItem onClick={() => handleLectureClick(1)}>1. Body Scan</MenuItem>
                                <MenuItem onClick={() => handleLectureClick(2)}>2. Respiratory Meditation</MenuItem>
                                <MenuItem onClick={() => handleLectureClick(3)}>3. Mindfulness Meditation</MenuItem>
                            </MenuList>
                        </Menu>
                        <Button variant='outline'>
                            Play
                        </Button>
                    </Flex>
                    <Progress value={30} />
                    <Button justifySelf='stretch' colorScheme='blue'>
                        Write meditation report
                    </Button>
                </Flex>
            </Flex>
        </Layout>
    );
};

export default GuidedMed;