import React from "react";
import { View, Text, Button } from "react-native";

const TripCreateScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TripCreateScreen</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.navigate("TravelList");
        }}
      ></Button>
    </View>
  );
};

export default TripCreateScreen;
