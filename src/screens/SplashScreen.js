import React, { useContext, useEffect } from "react";
import fb from "../api/firebase";
import { StyleSheet } from "react-native";
import { Container, Content, Spinner } from "native-base";

import { Context as AuthContext } from "../context/AuthContext";

const SplashScreen = () => {
  const { localSignIn } = useContext(AuthContext);
  useEffect(() => {
    fb();
    localSignIn();
  });
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Spinner color="gray" />
      </Content>
    </Container>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});
