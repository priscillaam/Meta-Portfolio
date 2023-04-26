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

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  const { isOpen, onOpen, onClose } = useDisclosure();


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
    >
      <Box color="black" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Hide breakpoint='(max-width: 768px)'>
          <nav>
            <Text fontFamily="Kumbh Sans" fontSize={{md: '32px', lg: '34px' }}>priscilla adriana</Text>
          </nav>
          
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a  href="/#projects" onClick={handleClick('projects')} >Projects</a>
              <a  href="/#contactme" onClick={handleClick('contactme')}>Contact</a>
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
                <List spacing={3}  fontFamily="Kumbh Sans" fontWeight='200' fontSize='4xl'>
                  <ListItem>
                    Home
                  </ListItem>
                  <ListItem>
                    Projects
                  </ListItem>
                  <ListItem>
                    Contact
                  </ListItem>
                  <ListItem>
                    My Links
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

