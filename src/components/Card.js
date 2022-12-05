import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Card({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkills} key="1">
      <Text style={styles.skill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkills: {
    backgroundColor: "#1F1E25",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
  },

  skill: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
