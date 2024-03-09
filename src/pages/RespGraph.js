import { React, useState } from "react";
import Layout from "../components/Layout";
import { Flex, Text, Button } from "@chakra-ui/react";
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
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'  
import { QuestionOutlineIcon } from "@chakra-ui/icons";

const RespGraph = () => {

    const [score, setScore] = useState(0);
    const handleScore = () => {
        setScore(score);
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
                        Respiratory Graph
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
                    <Slider
                    aria-label='slider-label'
                    defaultValue={30}
                    orientation='vertical'
                    minH={200}
                    onChange={(val) => setScore(val)}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                    <Flex
                    direction='row'
                    justifyContent='space-around'
                    >
                        <Button colorScheme="blue">
                            Start
                        </Button>
                        <Button colorScheme="gray">
                            Recordings
                        </Button>
                    </Flex>
                    <Text fontSize='4xl' fontWeight='bold' alignSelf='center'>
                        {score}
                    </Text>
                </Flex>
            </Flex>
        </Layout>
    );
};

export default RespGraph;