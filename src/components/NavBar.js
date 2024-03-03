// src/components/BottomNav.js
import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="teal.500"
      p="4"
      position="fixed"
      bottom="0"
      width="100%"
      color="white"
    >
      <Link as={RouterLink} to="/" fontSize="xl">
        <Text>Home</Text>
      </Link>
      <Link as={RouterLink} to="/meditation" fontSize="xl">
        <Text>Meditation</Text>
      </Link>
      <Link as={RouterLink} to="/groups" fontSize="xl">
        <Text>Groups</Text>
      </Link>
      <Link as={RouterLink} to="/profile" fontSize="xl">
        <Text>Profile</Text>
      </Link>
    </Flex>
  );
};

export default NavBar;
