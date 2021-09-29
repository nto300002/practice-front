import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo,useState,VFC } from "react";
import firebase from "firebase/App";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

export const Home: VFC = memo(() => {
  return (
    <>
    <Flex align="center" justify="center" height="40vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">hello!</Heading>
        <Divider my={4}/>
        <Stack spacing={6} py={4} px={10}>
          {/* <Input placeholder="ユーザーID"/> */}
          {/* <PrimaryButton >ログイン</PrimaryButton> */}
        </Stack>
      </Box>
    </Flex>
    </>
  )
})
