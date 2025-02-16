"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { colors } from "../App"

const VitalSignsInputScreen = ({ route, navigation }) => {
  const { patientId } = route.params
  const [heartRate, setHeartRate] = useState("")
  const [bloodPressure, setBloodPressure] = useState("")
  const [glucoseLevel, setGlucoseLevel] = useState("")

  const handleSubmit = () => {
    // In a real app, you would send this data to your backend
    console.log("Submitting vital signs for patient", patientId)
    console.log("Heart Rate:", heartRate)
    console.log("Blood Pressure:", bloodPressure)
    console.log("Glucose Level:", glucoseLevel)

    // Navigate back to patient details
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Heart Rate (bpm):</Text>
        <TextInput
          style={styles.input}
          value={heartRate}
          onChangeText={setHeartRate}
          keyboardType="numeric"
          placeholder="Enter heart rate"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Blood Pressure (mmHg):</Text>
        <TextInput
          style={styles.input}
          value={bloodPressure}
          onChangeText={setBloodPressure}
          placeholder="Enter blood pressure (e.g., 120/80)"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Glucose Level (mg/dL):</Text>
        <TextInput
          style={styles.input}
          value={glucoseLevel}
          onChangeText={setGlucoseLevel}
          keyboardType="numeric"
          placeholder="Enter glucose level"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightText,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default VitalSignsInputScreen

