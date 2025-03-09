export default function AnalisesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Análises</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-1">calendar_today</span>
            Este Mês
          </button>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-1">download</span>
            Exportar
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-1">add</span>
            Novo Relatório
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow p-5 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total de Pacientes</p>
              <h3 className="text-3xl font-bold">156</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">people</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-blue-500 flex items-center">
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
              +12%
            </span>
            <span className="ml-2 text-gray-500">desde o mês passado</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Consultas Realizadas</p>
              <h3 className="text-3xl font-bold">248</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">calendar_today</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-blue-500 flex items-center">
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
              +8%
            </span>
            <span className="ml-2 text-gray-500">desde o mês passado</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Leituras Registradas</p>
              <h3 className="text-3xl font-bold">12.5k</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">monitoring</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-blue-500 flex items-center">
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
              +18%
            </span>
            <span className="ml-2 text-gray-500">desde o mês passado</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Alertas Críticos</p>
              <h3 className="text-3xl font-bold">86</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <span className="material-symbols-outlined text-blue-600">warning</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 flex items-center">
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
              -5%
            </span>
            <span className="ml-2 text-gray-500">desde o mês passado</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="font-bold text-xl">Distribuição de Pacientes por Condição</h3>
            <div className="flex gap-2">
              <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200 transition-colors text-sm">
                Mensal
              </button>
              <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Anual
              </button>
            </div>
          </div>

          <div className="h-64 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm">Diabetes</span>
                </div>
                <span className="text-sm font-medium">38%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "38%" }}></div>
              </div>

              <div className="flex justify-between items-center mb-4 mt-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Hipertensão</span>
                </div>
                <span className="text-sm font-medium">32%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "32%" }}></div>
              </div>

              <div className="flex justify-between items-center mb-4 mt-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm">Asma</span>
                </div>
                <span className="text-sm font-medium">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "15%" }}></div>
              </div>

              <div className="flex justify-between items-center mb-4 mt-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-sm">Outras</span>
                </div>
                <span className="text-sm font-medium">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="font-bold text-xl">Tendências de Leituras</h3>
            <div className="flex gap-2">
              <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200 transition-colors text-sm">
                Glicemia
              </button>
              <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Pressão
              </button>
            </div>
          </div>

          <div className="h-64 flex items-center justify-center">
            <div className="w-full h-full flex flex-col justify-between">
              <div className="flex justify-between items-center h-8">
                <div className="text-xs text-gray-500">300</div>
                <div className="flex-1 border-b border-dashed border-gray-200 mx-2"></div>
              </div>
              <div className="flex justify-between items-center h-8">
                <div className="text-xs text-gray-500">200</div>
                <div className="flex-1 border-b border-dashed border-gray-200 mx-2"></div>
              </div>
              <div className="flex justify-between items-center h-8">
                <div className="text-xs text-gray-500">150</div>
                <div className="flex-1 border-b border-dashed border-gray-200 mx-2"></div>
              </div>
              <div className="flex justify-between items-center h-8">
                <div className="text-xs text-gray-500">100</div>
                <div className="flex-1 border-b border-dashed border-gray-200 mx-2"></div>
              </div>
              <div className="flex justify-between items-center h-8">
                <div className="text-xs text-gray-500">50</div>
                <div className="flex-1 border-b border-dashed border-gray-200 mx-2"></div>
              </div>

              <div className="flex justify-between mt-2">
                <div className="text-xs text-gray-500 text-center w-10">Jan</div>
                <div className="text-xs text-gray-500 text-center w-10">Fev</div>
                <div className="text-xs text-gray-500 text-center w-10">Mar</div>
                <div className="text-xs text-gray-500 text-center w-10">Abr</div>
                <div className="text-xs text-gray-500 text-center w-10">Mai</div>
                <div className="text-xs text-gray-500 text-center w-10">Jun</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="font-bold text-xl">Relatórios Recentes</h3>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center">
            <span className="material-symbols-outlined mr-1">description</span>
            Ver Todos
          </button>
        </div>

        <div className="overflow-x-auto -mx-4 md:-mx-6">
          <div className="inline-block min-w-full align-middle px-4 md:px-6">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-50 text-gray-700">
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-l-xl">
                    Relatório
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Data</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Tipo</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-r-xl">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">Relatório Mensal de Pacientes</div>
                    <div className="text-xs text-gray-500">Junho 2023</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">15/06/2023</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Mensal
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completo
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">visibility</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">download</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">Análise de Tendências de Glicemia</div>
                    <div className="text-xs text-gray-500">Q2 2023</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">10/06/2023</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Trimestral
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completo
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">visibility</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">download</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">Eficácia de Tratamentos</div>
                    <div className="text-xs text-gray-500">Hipertensão</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">05/06/2023</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Especial
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Em Progresso
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">visibility</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-600">edit</span>
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

