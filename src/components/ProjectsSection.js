import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
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
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
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
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
