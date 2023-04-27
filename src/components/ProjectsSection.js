import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Grid, Text } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Pinterest Clone",
    description:
      "Recreation using React, styled components, and Unsplash REST API.",
    getImageSrc: () => require('../images/pinterest_snap.PNG'),
    link: 'https://eloquent-khapse-4f2cc4.netlify.app/',
    viewText: 'Now',
  },
  {
    title: "Flutter Chat Application",
    description:
      "Built using Flutter framework, Dart, and Firebase.",
    getImageSrc: () => "https://images.unsplash.com/photo-1644510141511-b159ae5ad822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    link: 'https://github.com/priscillaam/Flutter-Chat-Application.git',
    viewText: 'Repository',
  },
  {
    title: "Little Lemon Project",
    description:
      "Developed for Coursera Meta Front-End Developer Course.",
    getImageSrc: () => "https://images.unsplash.com/photo-1632434553828-21679acb1671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    link: 'https://comforting-twilight-1e7802.netlify.app/',
    viewText: 'Now',
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      id='projects'
      backgroundColor="#f5f5f7"
      isLightBackground
      p={8}
      spacing={8}
      width={{sm: '100%', md: '95%', lg: '90%', xl: '85%'}}
    >
      <Text fontWeight='200' fontSize='4xl' color='#5c6347'>
        Featured Projects
      </Text>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', 
        xl: 'repeat(2, 1fr)'}} 
        gap={8}
        height='100%'
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            linkUrl={project.link}
            viewText={project.viewText}
          />
        ))}
      </Grid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
