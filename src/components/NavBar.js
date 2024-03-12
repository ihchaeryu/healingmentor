import { React, useState, useEffect } from 'react';
import { Flex, Text, Link, Divider, Icon, Center, } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { IoHome, IoHomeOutline } from "react-icons/io5";
import { PiHeartbeatFill, PiHeartbeat } from "react-icons/pi";
import { HiUsers, HiOutlineUsers } from "react-icons/hi2";
import { PiUserCircleFill, PiUserCircle } from "react-icons/pi";

const NavBar = () => {

  const location = useLocation();

  const [activeTab, setActiveTab] = useState('/');
  const tabIcons = {
    '/': {
      active: IoHome,
      nonActive: IoHomeOutline
    },
    '/meditation': {
      active: PiHeartbeatFill,
      nonActive: PiHeartbeat
    },
    '/groups': {
      active: HiUsers,
      nonActive: HiOutlineUsers
    },
    '/profile': {
      active: PiUserCircleFill,
      nonActive: PiUserCircle
    }
  }

  useEffect(() => {
    // Update the activeTab state whenever the location (route) changes
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <Flex
    direction='column'
    position="fixed"
    bottom="0"
    width="100%"
    >
      <Divider borderColor='gray.300' />
      <Flex
        as="nav"
        align="center"
        justify='space-evenly'
        p="3"
      >
        <Link as={RouterLink} to="/" onClick={() => setActiveTab('/')} >
          <Flex direction='column' justifyContent='center' alignItems='center'>
            <Icon as={
                activeTab === '/'
                ? tabIcons['/'].active
                : tabIcons['/'].nonActive
              } 
              boxSize={6} 
            />
            <Text color='black' fontSize="md" >Home</Text>
          </Flex>
        </Link>
        <Link as={RouterLink} to="/meditation" >
          <Flex direction='column' justifyContent='center' alignItems='center'>
            <Icon 
              as={
                activeTab.includes('/meditation')
                ? tabIcons['/meditation'].active
                : tabIcons['/meditation'].nonActive
              } 
              boxSize={6} 
            />
            <Text color='black' fontSize="md" >Meditation</Text>
          </Flex>
        </Link>
        <Link as={RouterLink} to="/groups" >
          <Flex direction='column' justifyContent='center' alignItems='center'>
            <Icon  
              as={
                activeTab === '/groups'
                ? tabIcons['/groups'].active
                : tabIcons['/groups'].nonActive
              } 
              boxSize={6} 
            />
            <Text color='black' fontSize="md" >Groups</Text>
          </Flex>
        </Link>
        <Link as={RouterLink} to="/profile" >
          <Flex direction='column' justifyContent='center' alignItems='center'>
            <Icon 
              as={
                activeTab === '/profile'
                ? tabIcons['/profile'].active
                : tabIcons['/profile'].nonActive
              } 
              boxSize={6}
            />
            <Text color='black' fontSize="md" >Profile</Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavBar;
