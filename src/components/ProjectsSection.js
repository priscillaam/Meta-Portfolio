import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Grid } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Project",
    description:
      "This is a responsive front-end website for a restaurant called Little Lemon, which was developed as a project for the Coursera Meta Front-End Developer Course.",
    getImageSrc: () => require("../images/photo1.jpg"),
    link: 'https://comforting-twilight-1e7802.netlify.app/',
  },
  {
    title: "Flutter Chat Application",
    description:
      "This application was built using the Flutter framework and programmed using the Dart programming language. The backend was implemented using Firebase.",
    getImageSrc: () => require("../images/photo2.jpg"),
    link: 'https://github.com/priscillaam/Flutter-Chat-Application.git',
  },
  {
    title: "Pinterest Clone",
    description:
      "his project is a clone of Pinterest, recreated using React and styled components. It imports stock photos from Unsplash API to fill out the pins and has several functional navigation buttons and selectors.",
    getImageSrc: () => require("../images/photo3.jpg"),
    link: 'https://eloquent-khapse-4f2cc4.netlify.app/'
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#f5f5f7"
      isLightBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      width={{sm: '100%', md: '95%', lg: '90%', xl: '85%'}}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
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
          />
        ))}
      </Grid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
