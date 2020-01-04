import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import axios from "axios";

const API_KEY = "e4768115fb7e5359d9a37f799a3040a3";

export default class App extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({ 
      isLoading: false, 
      condition: weather[0].main, 
      temp 
    }); 
    console.log(temp);
    console.log(weather); 
  };

  getLocation = async () => {
    try {
      //throw Error();
      const response = await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);

      // Send to API to get weather

      this.getWeather(latitude, longitude);
      //this.setState({isLoading:false});
    } catch (error) {
      Alert.alert("Error", "Can't find you.");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition}/>
    );
  }
}
