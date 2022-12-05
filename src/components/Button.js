import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function Button({ handleNewAddSKills }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={handleNewAddSKills}
    >
      <Text style={styles.buttonText}>ADD</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
