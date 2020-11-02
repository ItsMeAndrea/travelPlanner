import React from "react";
import { View, Text, Button } from "react-native";

const TripEditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TripEditScreen</Text>
      <Button
        title="Go to Back"
        onPress={() => {
          navigation.navigate("TripDetail");
        }}
      ></Button>
    </View>
  );
};

export default TripEditScreen;
