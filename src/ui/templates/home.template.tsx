import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"

import { Title } from "../atoms"

export function HomeTemplate() {
  return (
    <View style={styles.container}>
      <Title>Github Actions</Title>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
