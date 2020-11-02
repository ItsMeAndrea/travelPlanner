import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Form,
  Item,
  Input,
  Text,
  DatePicker,
  Textarea,
  Button,
  Icon,
} from "native-base";
import BackButton from "../components/BackButton";

const TripDetailScreen = ({ navigation }) => {
  const [date, setDate] = useState({ chosenDate: new Date(Date.now()) });
  const [edit, setEdit] = useState(false);
  //Con en el id hago una peticion a firebase para obtener los datos del viaje

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Form>
        <Item stackedLabel>
          <Input placeholder="Title:" disabled={!edit} />
        </Item>
        <Item stackedLabel>
          <Input placeholder="From:" disabled={!edit} />
        </Item>
        <Item stackedLabel>
          <Input placeholder="To:" disabled={!edit} />
        </Item>
        <View style={styles.dateStyles}>
          <Text style={styles.labelStyle}>Departure:</Text>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(Date.now())}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText={new Date(Date.now()).toString()}
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={setDate}
            disabled={!edit}
          />
        </View>
        <View style={styles.dateStyles}>
          <Text style={styles.labelStyle}>Return:</Text>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(Date.now())}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={setDate}
            disabled={!edit}
          />
        </View>
        <View style={styles.textAreaContainer}>
          <Text style={styles.labelStyle}>Comment:</Text>
          <Textarea rowSpan={5} bordered disabled={!edit} />
        </View>
      </Form>
      <Button
        style={styles.buttonStyle}
        block
        rounded
        onPress={() => setEdit(!edit)}
      >
        <Text>{edit ? "Save Changes" : "Edit Trip"}</Text>
      </Button>
    </View>
  );
};

TripDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    //Add title: "name "
    headerRight: () => (
      <Button transparent light>
        <Icon name="trash" type="FontAwesome" />
      </Button>
    ),
    headerLeft: () => <BackButton navigateTo={"TravelList"} />,
  };
};

const styles = StyleSheet.create({
  dateStyles: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 15,
  },
  labelStyle: {
    color: "#738290",
    fontWeight: "bold",
  },
  textAreaContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  buttonStyle: {
    marginBottom: 30,
    backgroundColor: "#738290",
    marginHorizontal: 15,
  },
});

export default TripDetailScreen;
