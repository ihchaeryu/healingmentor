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
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
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
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        mr={2}
        variant="ghost"
        fontSize="2xl"
        // Add your onClick handler for the hamburger menu here
      />
      <Text fontSize="xl" fontWeight="bold">
        HEALING MENTOR
      </Text>
      <InputGroup width={isSearchOpen ? '240px' : '0'}>
        <Input
          placeholder="Search..."
          display={isSearchOpen ? 'block' : 'none'}
        />
        <InputRightElement>
          {isSearchOpen ? (
            <CloseButton
              size="md"
              onClick={handleSearchToggle}
              aria-label="Close search"
            />
          ) : (
            <IconButton
              icon={<SearchIcon />}
              aria-label="Open Search"
              variant="ghost"
              fontSize="xl"
              onClick={handleSearchToggle}
            />
          )}
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default Header;
