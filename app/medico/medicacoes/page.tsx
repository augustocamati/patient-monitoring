export default function MedicacoesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Medicações</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar medicação..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-72 transition-all hover:shadow"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">search</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-1">add</span>
            Nova Medicação
          </button>
        </div>
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
                <p className="text-sm text-gray-500">Antidiabético</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              Comum
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Dosagens:</span> 500mg, 850mg, 1000mg
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Frequência:</span> 1-3x ao dia
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Pacientes:</span> 42 pacientes
            </p>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">edit</span>
              Editar
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">people</span>
              Ver Pacientes
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
                <p className="text-sm text-gray-500">Hormônio</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              Comum
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Dosagens:</span> Variável (unidades)
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Frequência:</span> 1-4x ao dia
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Pacientes:</span> 38 pacientes
            </p>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">edit</span>
              Editar
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">people</span>
              Ver Pacientes
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
                <h3 className="text-lg font-bold">Losartana</h3>
                <p className="text-sm text-gray-500">Anti-hipertensivo</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              Comum
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Dosagens:</span> 25mg, 50mg, 100mg
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Frequência:</span> 1-2x ao dia
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Pacientes:</span> 35 pacientes
            </p>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">edit</span>
              Editar
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">people</span>
              Ver Pacientes
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
                <h3 className="text-lg font-bold">Enalapril</h3>
                <p className="text-sm text-gray-500">Anti-hipertensivo</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              Comum
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Dosagens:</span> 5mg, 10mg, 20mg
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Frequência:</span> 1-2x ao dia
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Pacientes:</span> 28 pacientes
            </p>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">edit</span>
              Editar
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">people</span>
              Ver Pacientes
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
                <h3 className="text-lg font-bold">Salbutamol</h3>
                <p className="text-sm text-gray-500">Broncodilatador</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              Comum
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Dosagens:</span> 100mcg/dose (spray)
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Frequência:</span> Conforme necessário
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Pacientes:</span> 15 pacientes
            </p>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">edit</span>
              Editar
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1 text-sm">people</span>
              Ver Pacientes
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="font-bold text-xl">Prescrições Recentes</h3>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center">
            <span className="material-symbols-outlined mr-1">history</span>
            Ver Histórico
          </button>
        </div>

        <div className="overflow-x-auto -mx-4 md:-mx-6">
          <div className="inline-block min-w-full align-middle px-4 md:px-6">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-50 text-gray-700">
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-l-xl">
                    Paciente
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Medicação
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Dosagem</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Frequência
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Data</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-r-xl">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt=""
                      />
                      <div className="ml-3">
                        <div className="font-medium">João Pereira</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">Metformina</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">500mg</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">2x ao dia</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">Hoje, 10:30</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">edit</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">print</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt=""
                      />
                      <div className="ml-3">
                        <div className="font-medium">Maria Silva</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">Losartana</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">50mg</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">1x ao dia</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">Ontem, 15:45</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">edit</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">print</span>
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

