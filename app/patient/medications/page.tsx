export default function MedicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Minhas Medicações</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined mr-1">notifications</span>
          Configurar Lembretes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-5 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                <span className="material-symbols-outlined text-blue-600">medication</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Metformina</h3>
                <p className="text-sm text-gray-500">500mg</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              Ativo
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Frequência:</span> 2x ao dia
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Horários:</span> 08:00, 20:00
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Instruções:</span> Tomar após as refeições
            </p>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">edit</span>
              Editar
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">check_circle</span>
              Registrar Dose
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                <span className="material-symbols-outlined text-blue-600">medication</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Insulina</h3>
                <p className="text-sm text-gray-500">10 unidades</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              Ativo
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Frequência:</span> Antes das refeições
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Horários:</span> 07:30, 12:30, 18:00
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Instruções:</span> Aplicar 30 minutos antes de comer
            </p>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">edit</span>
              Editar
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">check_circle</span>
              Registrar Dose
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

