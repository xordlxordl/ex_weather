import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4B79A1", "#283E51"]
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#000000", "#434343"],
    title:"천둥/번개",
    subtitle:"천둥번개를 동반한 비가 옵니다"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#11998e", "#38ef7d"],
    title:"우박",
    subtitle:"외출을 삼가하세요"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#3C3B3F", "#605C3C"],
    title:"비",
    subtitle:"우산 챙기세요"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#8e9eab", "#eef2f3"],
    title:"눈",
    subtitle:"눈이 내립니다"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#DAD299", "#B0DAB9"],
    title:"공기상태",
    subtitle:"주의하세요"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#a8ff78", "#78ffd6"],
    title:"맑음",
    subtitle:"좋은 날씨입니다."
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#403B4A", "#E7E9BB"],
    title:"흐림",
    subtitle:"구름이 잔득 끼었습니다"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4286f4", "#373B44"],
    title:"먼지",
    subtitle:"황사 주의하세요"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={86}
          color="white"
        />
        <Text style={styles.text}>{temp}℃</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 33
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  textContainer: {
    paddingHorizontal:20,
    alignItems:"flex-start"
  }
});
