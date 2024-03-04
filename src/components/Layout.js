import React from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import Header from './Header'; 
import NavBar from './NavBar'; 

const Layout = ({ children }) => {

    // for now
  return (
    <Flex direction="column" height="100vh">
      <Header />
      {children}
      <NavBar />
    </Flex>
  );
};

export default Layout;
