export default function MonitoramentoPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Monitoramento em Tempo Real</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar paciente..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-72 transition-all hover:shadow"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">search</span>
          </div>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-1">filter_list</span>
            Filtrar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="relative">
                <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
              </div>
              <div className="ml-4">
                <div className="font-medium text-lg">João Pereira</div>
                <div className="text-sm text-gray-500">Diabetes Tipo 2</div>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
              Crítico
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-blue-100 mr-3">
                  <span className="material-symbols-outlined text-blue-600">water_drop</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Glicemia</div>
                  <div className="font-bold text-xl">250 mg/dL</div>
                </div>
              </div>
              <div className="text-red-600">↑ 25%</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-blue-100 mr-3">
                  <span className="material-symbols-outlined text-blue-600">favorite</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Freq. Cardíaca</div>
                  <div className="font-bold text-xl">88 bpm</div>
                </div>
              </div>
              <div className="text-blue-600">Normal</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-blue-100 mr-3">
                  <span className="material-symbols-outlined text-blue-600">speed</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Pressão Arterial</div>
                  <div className="font-bold text-xl">130/85 mmHg</div>
                </div>
              </div>
              <div className="text-blue-600">Normal</div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1">visibility</span>
              Ver Detalhes
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1">chat</span>
              Mensagem
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="relative">
                <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-yellow-500 rounded-full border-2 border-white"></span>
              </div>
              <div className="ml-4">
                <div className="font-medium text-lg">Maria Silva</div>
                <div className="text-sm text-gray-500">Hipertensão</div>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
              Atenção
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-blue-100 mr-3">
                  <span className="material-symbols-outlined text-blue-600">speed</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Pressão Arterial</div>
                  <div className="font-bold text-xl">150/95 mmHg</div>
                </div>
              </div>
              <div className="text-yellow-600">↑ 10%</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-blue-100 mr-3">
                  <span className="material-symbols-outlined text-blue-600">favorite</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Freq. Cardíaca</div>
                  <div className="font-bold text-xl">78 bpm</div>
                </div>
              </div>
              <div className="text-blue-600">Normal</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-blue-100 mr-3">
                  <span className="material-symbols-outlined text-blue-600">water_drop</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Saturação O₂</div>
                  <div className="font-bold text-xl">97%</div>
                </div>
              </div>
              <div className="text-blue-600">Normal</div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1">visibility</span>
              Ver Detalhes
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1">chat</span>
              Mensagem
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="relative">
                <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              <div className="ml-4">
                <div className="font-medium text-lg">Carlos Oliveira</div>
                <div className="text-sm text-gray-500">Asma</div>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
              Estável
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-blue-100 mr-3">
                  <span className="material-symbols-outlined text-blue-600">water_drop</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Saturação O₂</div>
                  <div className="font-bold text-xl">98%</div>
                </div>
              </div>
              <div className="text-blue-600">Normal</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-blue-100 mr-3">
                  <span className="material-symbols-outlined text-blue-600">favorite</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Freq. Cardíaca</div>
                  <div className="font-bold text-xl">72 bpm</div>
                </div>
              </div>
              <div className="text-blue-600">Normal</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-blue-100 mr-3">
                  <span className="material-symbols-outlined text-blue-600">speed</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Pressão Arterial</div>
                  <div className="font-bold text-xl">120/80 mmHg</div>
                </div>
              </div>
              <div className="text-blue-600">Normal</div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1">visibility</span>
              Ver Detalhes
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
              <span className="material-symbols-outlined mr-1">chat</span>
              Mensagem
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="font-bold text-xl">Alertas Recentes</h3>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center">
            <span className="material-symbols-outlined mr-1">notifications</span>
            Ver Todos
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center p-3 bg-red-50 border border-red-100 hover:bg-red-100 rounded-xl transition-all">
            <div className="p-3 rounded-full bg-red-100 mr-4">
              <span className="material-symbols-outlined text-red-600">warning</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <p className="font-medium">Glicemia Crítica - João Pereira</p>
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-700">Crítico</span>
              </div>
              <p className="text-sm text-gray-500">Glicemia: 250 mg/dL - Há 15 minutos</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 rounded-full hover:bg-red-200 transition-colors">
                <span className="material-symbols-outlined text-red-600">visibility</span>
              </button>
              <button className="p-1 rounded-full hover:bg-red-200 transition-colors">
                <span className="material-symbols-outlined text-red-600">chat</span>
              </button>
            </div>
          </div>

          <div className="flex items-center p-3 bg-yellow-50 border border-yellow-100 hover:bg-yellow-100 rounded-xl transition-all">
            <div className="p-3 rounded-full bg-yellow-100 mr-4">
              <span className="material-symbols-outlined text-yellow-600">warning</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <p className="font-medium">Pressão Arterial Elevada - Maria Silva</p>
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-700">Atenção</span>
              </div>
              <p className="text-sm text-gray-500">Pressão Arterial: 150/95 mmHg - Há 30 minutos</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 rounded-full hover:bg-yellow-200 transition-colors">
                <span className="material-symbols-outlined text-yellow-600">visibility</span>
              </button>
              <button className="p-1 rounded-full hover:bg-yellow-200 transition-colors">
                <span className="material-symbols-outlined text-yellow-600">chat</span>
              </button>
            </div>
          </div>

          <div className="flex items-center p-3 bg-blue-50 border border-blue-100 hover:bg-blue-100 rounded-xl transition-all">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <span className="material-symbols-outlined text-blue-600">info</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <p className="font-medium">Medicação Não Tomada - Ana Rodrigues</p>
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">Informação</span>
              </div>
              <p className="text-sm text-gray-500">Insulina - Horário: 12:30 - Há 2 horas</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 rounded-full hover:bg-blue-200 transition-colors">
                <span className="material-symbols-outlined text-blue-600">visibility</span>
              </button>
              <button className="p-1 rounded-full hover:bg-blue-200 transition-colors">
                <span className="material-symbols-outlined text-blue-600">chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

