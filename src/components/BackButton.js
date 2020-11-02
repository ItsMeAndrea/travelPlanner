import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "native-base";
import { navigate } from "../navigationRef";

const BackButton = ({ navigateTo }) => {
  return (
    <Button light transparent onPress={() => navigate(navigateTo)}>
      <Icon
        name="caretleft"
        type="AntDesign"
        style={{ fontSize: 15, marginRight: 10 }}
      />
    </Button>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
