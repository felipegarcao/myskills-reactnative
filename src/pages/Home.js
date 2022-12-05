import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";

export function Home() {
  const [newSkills, setNewSkills] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleNewAddSKills() {
    setMySkills((oldState) => [...oldState, newSkills]);
    setNewSkills("")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Luis Felipe</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkills}
        value={newSkills}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={handleNewAddSKills}
      >
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>

      <Text
        style={[
          styles.title,
          {
            marginVertical: 50,
          },
        ]}
      >
        My Skills
      </Text>

      {mySkills.map((skill, index) => (
        <TouchableOpacity style={styles.buttonSkills} key={index}>
          <Text style={styles.skill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#1F1E25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
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
