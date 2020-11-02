import React, { useContext } from "react";
import { DrawerItems } from "react-navigation-drawer";
import { SafeAreaView } from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "native-base";

import { Context as AuthContext } from "../context/AuthContext";

const Drawer = (props) => {
  const { signout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <View style={styles.drawerOptionContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate("TravelList");
                props.navigation.closeDrawer();
              }}
            >
              <Icon name="home" type="Entypo" style={{ color: "white" }} />
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.drawerOptionContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate("CalendarFlow");
                props.navigation.closeDrawer();
              }}
            >
              <Icon name="calendar" type="Entypo" style={{ color: "white" }} />
              <Text style={styles.text}>Calendar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.drawerOptionContainer}>
            <TouchableOpacity style={styles.button} onPress={signout}>
              <Icon name="log-out" type="Feather" style={{ color: "white" }} />
              <Text style={styles.text}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#738290",
  },
  drawerOptionContainer: {
    height: 80,
    justifyContent: "center",
    marginLeft: 20,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 15,
    fontWeight: "bold",
    color: "white",
  },
});
