import { VitalSignsHistory } from "@/components/vital-signs-history"

export default function VitalSignsHistoryPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Vital Signs History</h1>
      <VitalSignsHistory patientId={params.id} />
    </div>
  )
}

