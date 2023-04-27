import React from "react";
import {Box, Flex, HStack, Text} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: hello@example.com",
    },
    {
      icon: faGithub,
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
    },
    {
      icon: faMedium,
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com",
    },
  ];
  
  return (
    <Box backgroundColor="#f5f5f7" style={{ position: 'relative', zIndex: "1" }} overflowX="hidden">
      <footer style={{ position: "relative", width: "100%" }}>
        <Flex
          color="black"
          justifyContent="center"
          alignItems="center"
          minHeight={16}
          paddingX={12}
          width='100%'
        >
          <Text>Priscilla Adriana • © 2023 • </Text>
          <HStack paddingLeft={2}> 
            {
                Object.keys(socials).map((key, i) => {
                  return (<a href={socials[key].url} key={socials[key].url}><FontAwesomeIcon icon={socials[key].icon} size="md" /></a>)
                }) 
              }
            </HStack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
