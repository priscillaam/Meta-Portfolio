import React, { useEffect, useRef } from "react";
import { Box, HStack, Text, Show, Hide, Icon, useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody, List,
  ListItem, } from '@chakra-ui/react';
import { CiMenuFries } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";



const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: hello@example.com",
    },
    {
      icon: faGithub,
      url: "https://github.com/priscillaam",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/priscillaamartinez/",
    },
  ];

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#f5f5f7"
      zIndex={2}
      width='100%'
    >
      <Box color="#5c6347" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Hide breakpoint='(max-width: 768px)'>
          <nav>
            <Text fontSize={{md: '32px', lg: '34px' }}>priscilla adriana</Text>
          </nav>
          
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a  href="#projects" >Projects</a>
              <a  href="#contactme" >Contact</a>
            </HStack>
          </nav>
          </Hide>
          <Show breakpoint='(max-width: 768px)'>
            <nav>
              <HStack> 
                <Text fontWeight={100} fontSize={{ sm:'26px'}}>priscilla adriana</Text>
              </HStack>
            </nav>
            <nav>
            <HStack>
            <Icon as={CiMenuFries} w={8} h={6} onClick={onOpen} />
            <Drawer 
            onClose={onClose} isOpen={isOpen} 
            placement='left'
            size='full'>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader>
                  <HStack justifyContent="right">
                  <Icon
                    as={TfiClose}
                    onClick={onClose}
                  />
                  </HStack>
                </DrawerHeader>
                <DrawerBody>
                <List spacing={3} fontWeight='200' fontSize='4xl'>
                  <ListItem>
                  <a  href="/" >Home</a>
                  </ListItem>
                  <ListItem>
                  <a  href="#projects" onClick={onClose} >Projects</a>
                  </ListItem>
                  <ListItem>
                  <a  href="#contactme" onClick={onClose} >Contact Me</a>
                  </ListItem>
                  <ListItem>
                  {
                Object.keys(socials).map((key, i) => {
                  return (<a href={socials[key].url} key={socials[key].url} target="_blank" style={{ marginRight: "10px" }}><FontAwesomeIcon icon={socials[key].icon} size="md" /></a>)
                }) 
              }
                  </ListItem>
                </List>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            </HStack>
          </nav>
          </Show>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

