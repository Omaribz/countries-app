import { Button, Container, Heading, Text } from "@chakra-ui/react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Container maxW="100%" paddingTop="60px" centerContent>
        <Heading color="red">Oops!</Heading>
        <Text color="red" fontSize="20px">
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error occured"}
        </Text>
        <Button marginTop="30px" onClick={() => navigate("/")}>
          Go back
        </Button>
      </Container>
    </>
  );
};

export default ErrorPage;
