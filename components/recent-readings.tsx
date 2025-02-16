import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentReadings = [
  {
    patientId: "P001",
    name: "John Doe",
    heartRate: 72,
    bloodPressure: "120/80",
    glucose: 95,
    temperature: 98.6,
  },
  {
    patientId: "P002",
    name: "Jane Smith",
    heartRate: 68,
    bloodPressure: "118/76",
    glucose: 105,
    temperature: 98.4,
  },
  {
    patientId: "P003",
    name: "Bob Johnson",
    heartRate: 75,
    bloodPressure: "130/85",
    glucose: 110,
    temperature: 99.1,
  },
]

export function RecentReadings() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Patient ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Heart Rate</TableHead>
          <TableHead>Blood Pressure</TableHead>
          <TableHead>Glucose</TableHead>
          <TableHead>Temperature</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentReadings.map((reading) => (
          <TableRow key={reading.patientId}>
            <TableCell>{reading.patientId}</TableCell>
            <TableCell>{reading.name}</TableCell>
            <TableCell>{reading.heartRate} bpm</TableCell>
            <TableCell>{reading.bloodPressure} mmHg</TableCell>
            <TableCell>{reading.glucose} mg/dL</TableCell>
            <TableCell>{reading.temperature}°F</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

