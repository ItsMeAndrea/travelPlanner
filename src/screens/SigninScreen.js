import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Container, Content, H1 } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";

import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
  const { signin, state, clearErrorMessage } = useContext(AuthContext);
  return (
    <Container style={styles.container}>
      <LinearGradient
        colors={["#738290", "#A1B5D8", "#FFFCF7"]}
        style={styles.gradient}
      />
      <Content contentContainerStyle={styles.content}>
        <Text style={styles.title}>Travel Planer</Text>
        <Text style={styles.subtitle}>Sign In</Text>
        <AuthForm
          navigation={navigation}
          buttonText="Sign In"
          link="Signup"
          linkText="Don't have an account? Sign up!"
          onSubmit={({ email, password }) => {
            signin({ email, password });
          }}
          errorMessage={state.errorMessage}
        />
      </Content>
    </Container>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#738290",
    padding: 25,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
  title: {
    color: "#FFFCF7",
    textAlign: "center",
    fontSize: 40,
  },
  subtitle: {
    color: "#FFFCF7",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 50,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
});

export default SigninScreen;
