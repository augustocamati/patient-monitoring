"use client"

import { useState } from "react"
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import { colors } from "../App"

const PatientListScreen = ({ navigation }) => {
  const [patients, setPatients] = useState([
    { id: "1", name: "John Doe", age: 45, condition: "Diabetes" },
    { id: "2", name: "Jane Smith", age: 52, condition: "Hypertension" },
    { id: "3", name: "Bob Johnson", age: 60, condition: "Heart Disease" },
  ])

  const renderPatientItem = ({ item }) => (
    <TouchableOpacity
      style={styles.patientItem}
      onPress={() => navigation.navigate("PatientDetails", { patientId: item.id })}
    >
      <Text style={styles.patientName}>{item.name}</Text>
      <Text style={styles.patientInfo}>
        {item.age} years old - {item.condition}
      </Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <FlatList data={patients} renderItem={renderPatientItem} keyExtractor={(item) => item.id} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  patientItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  patientName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: colors.text,
  },
  patientInfo: {
    fontSize: 14,
    color: colors.lightText,
  },
})

export default PatientListScreen

