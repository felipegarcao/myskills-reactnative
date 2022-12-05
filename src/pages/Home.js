import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
} from "react-native";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export function Home() {
  const [newSkills, setNewSkills] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleNewAddSKills() {
    setMySkills((oldState) => [...oldState, newSkills]);
    setNewSkills("");
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

      <Button handleNewAddSKills={handleNewAddSKills} />

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
        <Card skill={skill} key={index} />
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
});
