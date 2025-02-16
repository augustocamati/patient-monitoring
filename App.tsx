import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"

import PatientListScreen from "./screens/PatientListScreen"
import PatientDetailsScreen from "./screens/PatientDetailsScreen"
import VitalSignsInputScreen from "./screens/VitalSignsInputScreen"
import VitalSignsHistoryScreen from "./screens/VitalSignsHistoryScreen"
import DashboardScreen from "./screens/DashboardScreen"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const colors = {
  primary: "#4a90e2",
  secondary: "#50c878",
  background: "#f0f4f8",
  text: "#333333",
  lightText: "#666666",
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "PatientList") {
            iconName = focused ? "ios-people" : "ios-people-outline"
          } else if (route.name === "Dashboard") {
            iconName = focused ? "ios-bar-chart" : "ios-bar-chart-outline"
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.lightText,
        tabBarStyle: { backgroundColor: colors.background },
      })}
    >
      <Tab.Screen name="PatientList" component={PatientListScreen} options={{ title: "Patients" }} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ title: "Dashboard" }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="PatientDetails" component={PatientDetailsScreen} options={{ title: "Patient Details" }} />
        <Stack.Screen
          name="VitalSignsInput"
          component={VitalSignsInputScreen}
          options={{ title: "Input Vital Signs" }}
        />
        <Stack.Screen
          name="VitalSignsHistory"
          component={VitalSignsHistoryScreen}
          options={{ title: "Vital Signs History" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { colors }

