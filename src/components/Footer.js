import React from "react";
import {Box, Flex, HStack, Text} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
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
    <Box backgroundColor="#f5f5f7" 
    style={{position: "relative", zIndex: "1" }} 
    overflowX="hidden">
      <footer
      style={{

          width: "100%",

        }}>
        <Flex
          color="#071f05"
          justifyContent="center"
          alignItems="center"
          minHeight={16}
          paddingX={12}
          width='100%'
          style={{ flexGrow: 1 }}
        >
          <Text>Priscilla Adriana • © 2023   </Text>
          <HStack paddingLeft={2}> 
            {
                Object.keys(socials).map((key, i) => {
                  return (<a href={socials[key].url} key={socials[key].url} target="_blank"><FontAwesomeIcon icon={socials[key].icon} size="md" /></a>)
                }) 
              }
            </HStack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
