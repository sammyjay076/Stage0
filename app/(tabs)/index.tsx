import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from "react-native";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const openPolicy = () => {
    try {
      setIsLoading(true);
      const websiteUrl = "https://github.com/sammyjay076/Stage0";
      Linking.openURL(websiteUrl)
        .then(() => console.log(`Opened ${websiteUrl}`))
        .catch((err) => console.error(`Error opening ${websiteUrl}: ${err}`));
      setIsLoading(false);
    } catch (error) {
      console.log("Error opening privacy policy", error);
      setIsLoading(false);
    }
  };
  const hireRN = () => {
    try {
      setIsLoading(true);
      const websiteUrl = "http://hng.tech/hire/react-native-developers";
      Linking.openURL(websiteUrl)
        .then(() => console.log(`Opened ${websiteUrl}`))
        .catch((err) => console.error(`Error opening ${websiteUrl}: ${err}`));
      setIsLoading(false);
    } catch (error) {
      console.log("Error opening privacy policy", error);
      setIsLoading(false);
    }
  };
  const hireMobile = () => {
    try {
      setIsLoading(true);
      const websiteUrl = "http://hng.tech/hire/ios-developers";
      Linking.openURL(websiteUrl)
        .then(() => console.log(`Opened ${websiteUrl}`))
        .catch((err) => console.error(`Error opening ${websiteUrl}: ${err}`));
      setIsLoading(false);
    } catch (error) {
      console.log("Error opening privacy policy", error);
      setIsLoading(false);
    }
  };
  const hireAndroid = () => {
    try {
      setIsLoading(true);
      const websiteUrl = "http://hng.tech/hire/android-developers";
      Linking.openURL(websiteUrl)
        .then(() => console.log(`Opened ${websiteUrl}`))
        .catch((err) => console.error(`Error opening ${websiteUrl}: ${err}`));
      setIsLoading(false);
    } catch (error) {
      console.log("Error opening privacy policy", error);
      setIsLoading(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color="#0d0d0e" />
      ) : (
        <>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              HNG Stage 0
            </Text>
          </View>
          <View
            style={{
              gap: 20,
            }}
          >
            <TouchableOpacity style={styles.button} onPress={openPolicy}>
              <Text style={styles.buttonText}>Github Repository</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={hireRN}>
              <Text style={styles.buttonText}>
                Hire React native developers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={hireMobile}>
              <Text style={styles.buttonText}>Hire iOS Developers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={hireAndroid}>
              <Text style={styles.buttonText}>Hire Android Developers</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
