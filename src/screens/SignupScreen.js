import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";

import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { signup, state, clearErrorMessage } = useContext(AuthContext);
  return (
    <Container style={styles.container}>
      <LinearGradient
        colors={["#738290", "#A1B5D8", "#FFFCF7"]}
        style={styles.gradient}
      />
      <NavigationEvents
        onWillBlur={clearErrorMessage}
        onWillFocus={clearErrorMessage}
      />
      <Content contentContainerStyle={styles.content}>
        <Text style={styles.title}>Travel Planer</Text>
        <Text style={styles.subtitle}>Sign Up</Text>
        <AuthForm
          navigation={navigation}
          buttonText="Sign Up"
          link="Signin"
          linkText="Already have an account? Sign in!"
          onSubmit={({ email, password }) => {
            signup({ email, password });
          }}
          errorMessage={state.errorMessage}
        />
      </Content>
    </Container>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

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
  title: {
    color: "#FFFCF7",
    textAlign: "center",
    fontSize: 40,

    fontWeight: "bold",
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

export default SignupScreen;
