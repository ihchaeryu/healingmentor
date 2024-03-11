// src/components/Header.js
import React, { useState } from 'react';
import {
  Flex,
  Text,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  CloseButton,
  Spacer,
  InputLeftElement,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import DrawerMenu from './DrawerMenu';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      bg="teal.500"
      p="4"
      color="white"
    >
      { !isSearchOpen && (
        <>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          mr={2}
          variant="ghost"
          fontSize="2xl"
          onClick={onOpen}
        />
        <DrawerMenu isOpen={isOpen} onClose={onClose} />
        <Text fontSize="xl" fontWeight="bold">
          HEALING MENTOR
        </Text>
        <Spacer />
        </>
      )}

      { isSearchOpen && (
        <InputGroup w="full">
          <InputLeftElement>
            <IconButton
              icon={<SearchIcon />}
              aria-label="Search"
              variant='ghost'
              // onClick={search}
            />
          </InputLeftElement>
          <Input placeholder="Search for anything" />
          <InputRightElement>
            <IconButton
              icon={<CloseIcon />}
              aria-label="Close search"
              onClick={toggleSearch}
              variant='ghost'
            />
          </InputRightElement>
        </InputGroup>
      )}

      { !isSearchOpen && (
        <IconButton
          icon={<SearchIcon />}
          aria-label="Open search"
          onClick={toggleSearch}
          variant='ghost'
        />
      )}
    </Flex>
  );
};

export default Header;
