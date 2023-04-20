import { Heading, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, linkUrl }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

    

        
    

  return (
    <HStack spacing='24px' padding='1px'>
    <Box bg='white' rounded="lg" overflow="hidden">
      <Image src={imageSrc} alt='project-image' />
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
