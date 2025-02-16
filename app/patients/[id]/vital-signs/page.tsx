import { VitalSignsInput } from "@/components/vital-signs-input"

export default function VitalSignsInputPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Input Vital Signs</h1>
      <VitalSignsInput patientId={params.id} />
    </div>
  )
}

