import React from "react";
import { View, Text } from "react-native";
import { Button, Icon } from "native-base";

const CalendarScreen = () => {
  return (
    <View>
      <Text>CalendarScreen</Text>
    </View>
  );
};

CalendarScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <Button
        transparent
        light
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        <Icon name="menu" type="Entypo" />
      </Button>
    ),
  };
};

export default CalendarScreen;
