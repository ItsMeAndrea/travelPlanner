import React from "react";
import {
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Container, Content, Button, Icon, Text, ListItem } from "native-base";

const locations = [
  {
    name: "Brasil",
    id: "1",
  },
  {
    name: "Alemania",
    id: "2",
  },
  {
    name: "Chile",
    id: "3",
  },
];

const TravelListScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={locations}
        renderItem={({ item }) => {
          return (
            <ListItem noIndent button>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TripDetail", { id: item.id })
                }
                style={styles.ListItem}
              >
                <Text style={styles.nameStyle}>{item.name}</Text>
                <Icon
                  name="caretright"
                  style={styles.iconItem}
                  type="AntDesign"
                />
              </TouchableOpacity>
            </ListItem>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <Button
        block
        rounded
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("TripCreate")}
      >
        <Text>Add new Trip</Text>
      </Button>
    </SafeAreaView>
  );
};

TravelListScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Travel Planer",
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

const styles = StyleSheet.create({
  iconItem: {
    color: "#738290",
    fontSize: 15,
  },
  ListItem: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    height: 30,
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#738290",
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  nameStyle: {
    color: "#738290",
    fontWeight: "bold",
  },
});

export default TravelListScreen;
