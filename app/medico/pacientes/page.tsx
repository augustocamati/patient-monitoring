export default function PacientesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Pacientes</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar paciente..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-72 transition-all hover:shadow"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">search</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-1">add</span>
            Adicionar Paciente
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-6 hover:shadow-xl transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="font-bold text-xl">Lista de Pacientes</h3>
          <div className="flex gap-2">
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center">
              <span className="material-symbols-outlined mr-1">filter_list</span>
              Filtrar
            </button>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center">
              <span className="material-symbols-outlined mr-1">download</span>
              Exportar
            </button>
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 md:-mx-6">
          <div className="inline-block min-w-full align-middle px-4 md:px-6">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-50 text-gray-700">
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-l-xl">
                    Paciente
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Condição</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Última Leitura
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-r-xl">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt=""
                        />
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">João Pereira</div>
                        <div className="text-sm text-gray-500">56 anos</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-800">P001</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div>
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">Diabetes Tipo 2</span>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-800">Glicemia: 250 mg/dL</div>
                    <div className="text-xs text-gray-500">Há 15 minutos</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                      Crítico
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">visibility</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">chat</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">medication</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://randomuser.me/api/portraits/women/68.jpg"
                          alt=""
                        />
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-yellow-500 rounded-full border-2 border-white"></span>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">Maria Silva</div>
                        <div className="text-sm text-gray-500">62 anos</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-800">P002</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div>
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">Hipertensão</span>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-800">P.A.: 150/95 mmHg</div>
                    <div className="text-xs text-gray-500">Há 30 minutos</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                      Atenção
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">visibility</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">chat</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">medication</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://randomuser.me/api/portraits/men/45.jpg"
                          alt=""
                        />
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">Carlos Oliveira</div>
                        <div className="text-sm text-gray-500">48 anos</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-800">P003</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div>
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">Asma</span>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-800">Oximetria: 98%</div>
                    <div className="text-xs text-gray-500">Há 1 hora</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                      Estável
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">visibility</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">chat</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">medication</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">Mostrando 3 de 156 pacientes</div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">Anterior</button>
            <button className="px-3 py-1 rounded-md bg-blue-600 text-white">1</button>
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">2</button>
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">3</button>
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

