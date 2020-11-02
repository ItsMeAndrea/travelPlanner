import createDataContext from "./createDataContext";
import firebase from "firebase";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => ({ email, password }) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      dispatch({ type: "signup" });
      navigate("TravelList");
    })
    .catch((err) => {
      dispatch({ type: "add_error", payload: err.message });
    });
};

const signin = (dispatch) => ({ email, password }) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      dispatch({ type: "signup" });
      navigate("TravelList");
    })
    .catch((err) => {
      dispatch({ type: "add_error", payload: err.message });
    });
};

const signout = (dispatch) => () => {
  firebase
    .auth()
    .signOut()
    .then((res) => {
      navigate("LoginFlow");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const localSignIn = () => () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      navigate("TravelList");
    } else {
      navigate("LoginFlow");
    }
  });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, clearErrorMessage, signin, localSignIn, signout },
  { errorMessage: "" }
);
