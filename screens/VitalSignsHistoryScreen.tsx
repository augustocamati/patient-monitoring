import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native"
import { LineChart } from "react-native-chart-kit"
import { colors } from "../App"

const VitalSignsHistoryScreen = ({ route }) => {
  const { patientId } = route.params

  // In a real app, you would fetch this data from your backend
  const vitalSignsHistory = [
    { id: "1", date: "2023-05-15", heartRate: 72, bloodPressure: "120/80", glucoseLevel: 95 },
    { id: "2", date: "2023-05-10", heartRate: 75, bloodPressure: "118/78", glucoseLevel: 100 },
    { id: "3", date: "2023-05-05", heartRate: 70, bloodPressure: "122/82", glucoseLevel: 98 },
    { id: "4", date: "2023-04-30", heartRate: 73, bloodPressure: "121/79", glucoseLevel: 97 },
    { id: "5", date: "2023-04-25", heartRate: 71, bloodPressure: "119/81", glucoseLevel: 99 },
  ]

  const chartData = {
    labels: vitalSignsHistory.map((item) => item.date.slice(5)),
    datasets: [
      {
        data: vitalSignsHistory.map((item) => item.heartRate),
        color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: vitalSignsHistory.map((item) => Number.parseInt(item.bloodPressure.split("/")[0])),
        color: (opacity = 1) => `rgba(80, 200, 120, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: vitalSignsHistory.map((item) => item.glucoseLevel),
        color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Heart Rate", "Systolic BP", "Glucose"],
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Vital Signs History</Text>
        <LineChart
          data={chartData}
          width={Dimensions.get("window").width - 32}
          height={220}
          chartConfig={{
            backgroundColor: colors.background,
            backgroundGradientFrom: colors.background,
            backgroundGradientTo: colors.background,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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

      {vitalSignsHistory.map((item) => (
        <View key={item.id} style={styles.historyItem}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.vitalSign}>Heart Rate: {item.heartRate} bpm</Text>
          <Text style={styles.vitalSign}>Blood Pressure: {item.bloodPressure} mmHg</Text>
          <Text style={styles.vitalSign}>Glucose Level: {item.glucoseLevel} mg/dL</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  chartContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.text,
  },
  historyItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: colors.text,
  },
  vitalSign: {
    fontSize: 14,
    marginBottom: 2,
    color: colors.lightText,
  },
})

export default VitalSignsHistoryScreen

