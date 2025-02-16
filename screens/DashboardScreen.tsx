import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native"
import { PieChart, BarChart } from "react-native-chart-kit"
import { colors } from "../App"

const DashboardScreen = () => {
  // In a real app, you would fetch this data from your backend
  const dashboardData = {
    totalPatients: 150,
    criticalPatients: 12,
    stablePatients: 108,
    underObservationPatients: 30,
    averageHeartRate: 75,
    averageBloodPressure: "120/80",
    averageGlucoseLevel: 98,
  }

  const patientStatusData = [
    {
      name: "Critical",
      population: dashboardData.criticalPatients,
      color: "#FF6384",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Stable",
      population: dashboardData.stablePatients,
      color: "#36A2EB",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Under Observation",
      population: dashboardData.underObservationPatients,
      color: "#FFCE56",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ]

  const vitalSignsData = {
    labels: ["Heart Rate", "Systolic BP", "Glucose"],
    datasets: [
      {
        data: [
          dashboardData.averageHeartRate,
          Number.parseInt(dashboardData.averageBloodPressure.split("/")[0]),
          dashboardData.averageGlucoseLevel,
        ],
      },
    ],
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Patient Status Overview</Text>
        <PieChart
          data={patientStatusData}
          width={Dimensions.get("window").width - 32}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Average Vital Signs</Text>
        <BarChart
          data={vitalSignsData}
          width={Dimensions.get("window").width - 32}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: colors.background,
            backgroundGradientFrom: colors.background,
            backgroundGradientTo: colors.background,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            barPercentage: 0.5,
          }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Patients</Text>
        <Text style={styles.cardValue}>{dashboardData.totalPatients}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Critical Patients</Text>
        <Text style={styles.cardValue}>{dashboardData.criticalPatients}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.text,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
})

export default DashboardScreen

