import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Form, Item, Label, Input, Button, Text } from "native-base";

const AuthForm = ({
  navigation,
  buttonText,
  link,
  linkText,
  onSubmit,
  errorMessage,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form>
      <Item stackedLabel>
        <Label style={{ color: "#FFFCF7" }}>Email</Label>
        <Input
          value={email}
          onChangeText={(e) => setEmail(e)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
      </Item>
      <Item stackedLabel>
        <Label style={{ color: "#FFFCF7" }}>Password</Label>
        <Input
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </Item>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(link);
        }}
      >
        <Text style={styles.link}>{linkText}</Text>
      </TouchableOpacity>
      <Button
        rounded
        block
        style={styles.button}
        onPress={() => onSubmit({ email, password })}
      >
        <Text>{buttonText}</Text>
      </Button>
    </Form>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    backgroundColor: "#738290",
  },
  link: {
    color: "#FFFCF7",
    marginTop: 20,
  },
  errorMessage: {
    marginLeft: 10,
    color: "#f21f2d",
  },
});
