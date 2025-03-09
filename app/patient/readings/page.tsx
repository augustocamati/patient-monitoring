export default function ReadingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Histórico de Leituras</h1>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-1">download</span>
            Exportar Dados
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-1">add</span>
            Nova Leitura
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="font-bold text-xl">Registro de Leituras</h3>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Buscar leituras..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition-all hover:shadow"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">search</span>
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 md:-mx-6">
          <div className="inline-block min-w-full align-middle px-4 md:px-6">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-50 text-gray-700">
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-l-xl">
                    Data/Hora
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Tipo</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Valor</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-r-xl">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-800">Hoje, 08:30</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-blue-100 mr-2">
                        <span className="material-symbols-outlined text-blue-600 text-sm">water_drop</span>
                      </div>
                      <span className="text-sm">Glicemia</span>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-800">110 mg/dL</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      Normal
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">edit</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-800">Hoje, 08:35</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-blue-100 mr-2">
                        <span className="material-symbols-outlined text-blue-600 text-sm">favorite</span>
                      </div>
                      <span className="text-sm">Pressão Arterial</span>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-800">120/80 mmHg</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      Normal
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">edit</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

