import React from "react";
import { Avatar, Heading, VStack, background } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import AvatarPhoto from "../images/profile_picture.png"

const greeting = "Hello, my name is Priscilla! I’m passionate about creating user interfaces and experiences for web applications.";
const bio1 = "Frontend Developer";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
  >
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1601379329542-31c59347e2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
        filter: "brightness(80%)",
        width: "100%",
        height: "100vh",
        position: "absolute",
        zIndex: 0,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'bottom',
      }}
    />
    <VStack zIndex={1}>
      <Heading color="white" as="h2" size="2xl" noOfLines={1} >
        {bio1}
      </Heading>
      <Heading as="h6" size="sm"  color='#5c6347' textAlign='center' width='65%'>
        {greeting}
      </Heading>
    </VStack>
    <br />
    <br />
    <br />
    <VStack>
      <Avatar size="2xl" name="priscilla" src={AvatarPhoto} />
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
