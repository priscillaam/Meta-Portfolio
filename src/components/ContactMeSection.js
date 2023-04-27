import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const [selectedName, setSelectedName] = useState(false)
  const [selectedEmail, setSelectedEmail] = useState(false)
  const [selectedComment, setSelectedComment] = useState(false)

  const handleNameClick = () => setSelectedName(!selectedName)
  const handleEmailClick = () => setSelectedEmail(!selectedEmail)
  const handleCommentClick = () => setSelectedComment(!selectedComment)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '', 
    },
    onSubmit: (values,

    ) => {
      submit("www.randomurl.com", values);
      
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
    .required("First name is required"),
      email: Yup.string()
        // Format Validation
        .email("Invalid email address format")
        // Required Field Validation
        .required("Email is required"),
      type: Yup.string(),
        // .optional(),
      comment: Yup.string()
        .required("Required")
        .min(25, "Must be at least 25 characters")
    }),
  });
  useEffect(() => {
    if (response !== null) {
      onOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#f5f5f7"
      py={20}
      spacing={14}
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
        backgroundPosition: 'top',
      }}
    />
      <VStack width={
      {base: '75%', // 0-30em
      sm: '85%', // 30em-48em
      md: '95%', // 48em-62em
      lg: '100%'}} maxWidth='100%' p={12} alignItems="flex-start" zIndex={1} backgroundColor='#4d492e' opacity={0.8} id="contactme">
        <Heading as="h1">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={(e) => {
            formik.handleSubmit();
            e.preventDefault()
          }}>
            <VStack spacing={2}>
              <FormControl isInvalid={selectedName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onClick={handleNameClick}
                  {...formik.getFieldProps('firstName')}
                />
              {selectedName && <FormErrorMessage>First name required</FormErrorMessage>}
              </FormControl>
              <FormControl isInvalid={selectedEmail}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onClick={handleEmailClick}
                  {...formik.getFieldProps('email')}
                />
                {selectedEmail && <FormErrorMessage>Email is required</FormErrorMessage>}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps('type')}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={selectedComment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={200}
                  onClick={handleCommentClick}
                  {...formik.getFieldProps('comment')}
                />
                {selectedComment && <FormErrorMessage>Comment is required</FormErrorMessage>}
              </FormControl>
              <Button
                isLoading={isLoading}
                type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
        
      </VStack>
      
    </FullScreenSection>
  );
};

export default LandingSection;
