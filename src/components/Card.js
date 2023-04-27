import { Heading, Box, HStack, Button, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, linkUrl, viewText }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

    

        
    

  return (
    <HStack spacing='24px' padding='1px' justifyContent="center" alignItems="center">
    <Box  overflow="hidden" 
      width={{ base: '85%', md: "90%", lg: '100%' }}
      minHeight={{ base: "325px", md: "450px", xl:"385px"}}
      position='relative'
      alignSelf='center'
    >
        <Box
        style={{
          backgroundImage:
            `url(${imageSrc})`,
          filter: "brightness(45%)",
          zIndex: 0,
          position: 'absolute',
          top:"0",
          left:"0",
          right:"0",
          bottom:"0",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          }}/>
        <Box position="relative" zIndex="1" display='flex'  flexDirection="column" alignItems='center' padding='70px' >
          <Heading size='md' margin='12px' color = "white" zIndex={1} textAlign='center'>
              {title}
          </Heading>
          <Text margin='12px' color='white' zIndex={1} textAlign='center'>
            {description}
            </Text>
            <Button margin='12px' height='60px' width={{base: '65%', sm: '45%', md:'35%'}} color='#C6BEB1' variant='outline' zIndex={1} textAlign='center' fontWeight='400' fontSize='sm' paddingLeft={10} paddingRight={10}>
            <a href={linkUrl} color='#C6BEB1'>View {viewText}</a>
            </Button>
          </Box>
        </Box>
  </HStack>
  );
};

export default Card;
