import { Heading, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, linkUrl }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

    

        
    

  return (
    <HStack spacing='24px' padding='1px' justifyContent="center"
    alignItems="center">
    <Box  overflow="hidden" 
      width={{ base: '85%', md: "90%", lg: '95%', xl: '100%' }}
      minHeight={{ base: "325px", md: "450px", lg: "550px", xl:"385px"}}
    style={{
        backgroundImage:
          `url(${imageSrc})`,
        filter: "brightness(80%)",
        zIndex: 0,
        backgroundSize: 'cover',
      }}>
      <Heading size='md' margin='12px' color = "black">
        {title}
      </Heading>
      <Text margin='12px' color='gray.400'>
        {description}
        </Text>
        <Text margin='12px' color='black'>
        <a href={linkUrl}>See more  <FontAwesomeIcon icon={faArrowRight} size="1x"/></a>
        </Text>
        
    </Box>
  </HStack>
  );
};

export default Card;
