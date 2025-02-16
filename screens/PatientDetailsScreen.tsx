import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import { LineChart } from "react-native-chart-kit"
import { colors } from "../App"

const PatientDetailsScreen = ({ route, navigation }) => {
  const { patientId } = route.params

  // In a real app, you would fetch patient details based on the patientId
  const patient = {
    id: patientId,
    name: "John Doe",
    age: 45,
    condition: "Diabetes",
    lastCheckup: "2023-05-15",
  }

  const vitalSignsData = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        data: [65, 68, 70, 72, 68, 70, 72],
        color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{patient.name}</Text>
        <Text style={styles.info}>Age: {patient.age}</Text>
        <Text style={styles.info}>Condition: {patient.condition}</Text>
        <Text style={styles.info}>Last Checkup: {patient.lastCheckup}</Text>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Heart Rate Trend (Last 7 Days)</Text>
        <LineChart
          data={vitalSignsData}
          width={Dimensions.get("window").width - 32}
          height={220}
          chartConfig={{
            backgroundColor: colors.background,
            backgroundGradientFrom: colors.background,
            backgroundGradientTo: colors.background,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("VitalSignsInput", { patientId })}>
        <Text style={styles.buttonText}>Input Vital Signs</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.secondary }]}
        onPress={() => navigation.navigate("VitalSignsHistory", { patientId })}
      >
        <Text style={styles.buttonText}>View Vital Signs History</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
    color: colors.lightText,
  },
  chartContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
})

export default PatientDetailsScreen

