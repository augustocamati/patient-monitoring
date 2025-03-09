export default function MensagensPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Mensagens</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar mensagens..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-72 transition-all hover:shadow"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">search</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-1">add</span>
            Nova Mensagem
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg lg:col-span-1 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-bold text-lg">Conversas</h3>
          </div>

          <div className="overflow-y-auto max-h-[600px]">
            <div className="p-2">
              <div className="bg-blue-50 rounded-xl p-3 cursor-pointer hover:bg-blue-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt=""
                      />
                      <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">João Pereira</div>
                      <div className="text-xs text-gray-500">Online</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-xs text-gray-500">10:30</div>
                    <div className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center mt-1">
                      2
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  Doutor, minha glicemia está muito alta hoje. O que devo fazer?
                </p>
              </div>
            </div>

            <div className="p-2">
              <div className="rounded-xl p-3 cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt=""
                      />
                      <span className="absolute bottom-0 right-0 h-3 w-3 bg-gray-300 rounded-full border-2 border-white"></span>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Maria Silva</div>
                      <div className="text-xs text-gray-500">Offline</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-xs text-gray-500">Ontem</div>
                    <div className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center mt-1">
                      1
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 truncate">Preciso remarcar minha consulta para a próxima semana.</p>
              </div>
            </div>

            <div className="p-2">
              <div className="rounded-xl p-3 cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt=""
                      />
                      <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Carlos Oliveira</div>
                      <div className="text-xs text-gray-500">Online</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Seg</div>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  Obrigado pelas recomendações, doutor. Estou me sentindo melhor.
                </p>
              </div>
            </div>

            <div className="p-2">
              <div className="rounded-xl p-3 cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://randomuser.me/api/portraits/women/22.jpg"
                        alt=""
                      />
                      <span className="absolute bottom-0 right-0 h-3 w-3 bg-gray-300 rounded-full border-2 border-white"></span>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Ana Rodrigues</div>
                      <div className="text-xs text-gray-500">Offline</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Seg</div>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  Enviei os resultados dos meus exames. Poderia analisá-los?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg lg:col-span-2 flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              <div className="ml-3">
                <div className="font-medium">João Pereira</div>
                <div className="text-xs text-gray-500">Online • Digitando...</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined text-gray-600">phone</span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined text-gray-600">videocam</span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined text-gray-600">more_vert</span>
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="bg-gray-100 text-gray-500 text-xs rounded-full px-3 py-1">Hoje, 10:15</div>
              </div>

              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-sm">
                    Bom dia, Doutor. Estou preocupado porque minha glicemia está em 250 mg/dL hoje de manhã, mesmo tendo
                    tomado a insulina ontem à noite.
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                  <p className="text-sm">
                    Bom dia, João. Isso está acima do ideal. Você seguiu a dieta recomendada ontem? Tomou a medicação na
                    dose correta?
                  </p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-sm">
                    Acho que comi um pouco mais de carboidratos no jantar. E tomei a insulina na dose habitual.
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                  <p className="text-sm">
                    Entendo. Por favor, tome uma dose adicional de insulina conforme o protocolo que discutimos. Beba
                    bastante água e monitore sua glicemia a cada 2 horas. Se continuar acima de 200 mg/dL após duas
                    medições, entre em contato comigo novamente ou procure atendimento.
                  </p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-sm">Vou fazer isso, doutor. Devo ajustar a dose da metformina também?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined text-gray-600">attach_file</span>
              </button>
              <div className="flex-1 mx-2">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ```tsx file="app/medico/consultas/page.tsx"
// export default function ConsultasPage() {
//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Consultas</h2>
//         <div className="flex flex-col sm:flex-row gap-2">
//           <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center justify-center">
//             <span className="material-symbols-outlined mr-1">today</span>
//             Hoje
//           </button>
//           <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center justify-center">
//             <span className="material-symbols-outlined mr-1">calendar_month</span>
//             Semana
//           </button>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center">
//             <span className="material-symbols-outlined mr-1">add</span>
//             Nova Consulta
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//           <h3 className="font-bold text-xl">Consultas de Hoje</h3>
//           <div className="text-sm text-gray-500">
//             Segunda-feira, 15 de Junho de 2023
//           </div>
//         </div>
        
//         <div className="space-y-4">
//           <div className="flex flex-col md:flex-row md:items-center p-4 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 transition-all">
//             <div className="flex items-center md:w-1/4 mb-4 md:mb-0">
//               <div className="p-3 rounded-full bg-blue-100 mr-4">
//                 <span className="material-symbols-outlined text-blue-600">schedule</span>
//               </div>
//               <div>
//                 <div className="font-medium">09:00 - 09:30</div>
//                 <div className="text-sm text-gray-500">30 minutos</div>
//               </div>
//             </div>
//             <div className="flex items-center md:w-1/4 mb-4 md:mb-0">
//               <img
//                 className="h-10 w-10 rounded-full mr-3"
//                 src="https://randomuser.me/api/portraits/men/32.jpg"
//                 alt=""
//               />
//               <div>
//                 <div className="font-medium">João Pereira</div>
//                 <div className="text-sm text-gray-500">Diabetes Tipo 2</div>
//               </div>
//             </div>
//             <div className="md:w-1/4 mb-4 md:mb-0">
//               <div className="text-sm font-medium">Tipo</div>
//               <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                 Acompanhamento
//               </div>
//             </div>
//             <div className="md:w-1/4 flex justify-end">
//               <div className="flex space-x-2">
//                 <button className="p-2 rounded-full hover:bg-blue-200 transition-colors">
//                   <span className="material-symbols-outlined text-blue-600">videocam</span>
//                 </button>
//                 <button className="p-2 rounded-full hover:bg-blue-200 transition-colors">
//                   <span className="material-symbols-outlined text-blue-600">edit</span>
//                 </button>
//                 <button className="p-2 rounded-full hover:bg-blue-200 transition-colors">
//                   <span className="material-symbols-outlined text-blue-600">more_vert</span>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex flex-col md:flex-row md:items-center p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
//             <div className="flex items-center md:w-1/4 mb-4 md:mb-0">
//               <div className="p-3 rounded-full bg-blue-100 mr-4">
//                 <span className="material-symbols-outlined text-blue-600">schedule</span>
//               </div>
//               <div>
//                 <div className="font-medium">11:00 - 11:30</div>
//                 <div className="text-sm text-gray-500">30 minutos</div>
//               </div>
//             </div>
//             <div className="flex items-center md:w-1/4 mb-4 md:mb-0">
//               <img
//                 className="h-10 w-10 rounded-full mr-3"
//                 src="https://randomuser.me/api/portraits/women/68.jpg"
//                 alt=""
//               />
//               <div>
//                 <div className="font-medium">Maria Silva</div>
//                 <div className="text-sm text-gray-500">Hipertensão</div>
//               </div>
//             </div>
//             <div className="md:w-1/4 mb-4 md:mb-0">
//               <div className="text-sm font-medium">Tipo</div>
//               <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
//                 Primeira Consulta
//               </div>
//             </div>
//             <div className="md:w-1/4 flex justify-end">
//               <div className="flex space-x-2">
//                 <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
//                   <span className="material-symbols-outlined text-blue-600">videocam</span>
//                 </button>
//                 <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
//                   <span className="material-symbols-outlined text-blue-600">edit</span>
//                 </button>
//                 <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
//                   <span className="material-symbols-outlined text-blue-600">more_vert</span>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex flex-col md:flex-row md:items-center p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
//             <div className="flex items-center md:w-1/4 mb-4 md:mb-0">
//               <div className="p-3 rounded-full bg-blue-100 mr-4">
//                 <span className="material-symbols-outlined text-blue-600">schedule</span>
//               </div>
//               <div>
//                 <div className="font-medium">14:00 - 14:30</div>
//                 <div className="text-sm text-gray-500">30 minutos</div>
//               </div>
//             </div>
//             <div className="flex items-center md:w-1/4 mb-4 md:mb-0">
//               <img
//                 className="h-10 w-10 rounded-full mr-3"
//                 src="https://randomuser.me/api/portraits/men/45.jpg"
//                 alt=""
//               />
//               <div>
//                 <div className="font-medium">Carlos Oliveira</div>
//                 <div className="text-sm text-gray-500">Asma</div>
//               </div>
//             </div>
//             <div className="md:w-1/4 mb-4 md:mb-0">
//               <div className="text-sm font-medium">Tipo</div>
//               <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                 Exames
//               </div>
//             </div>
//             <div className="md:w-1/4 flex justify-end">
//               <div className="flex space-x-2">
//                 <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
//                   <span className="material-symbols-outlined text-blue-600">videocam</span>
//                 </button>
//                 <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
//                   <span className="material-symbols-outlined text-blue-600">edit</span>
//                 </button>
//                 <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
//                   <span className="material-symbols-outlined text-blue-600">more_vert</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//           <h3 className="font-bold text-xl">Próximas Consultas</h3>
//           <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors flex items-center">
//             <span className="material-symbols-outlined mr-1">calendar_view_month</span>
//             Ver Calendário
//           </button>
//         </div>
        
//         <div className="overflow-x-auto -mx-4 md:-mx-6">
//           <div className="inline-block min-w-full align-middle px-4 md:px-6">
//             <table className="min-w-full">
//               <thead>
//                 <tr className="bg-blue-50 text-gray-700">
//                   <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-l-xl">
//                     Data/Hora
//                   </th>
//                   <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Paciente</th>
//                   <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Tipo</th>
//                   <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
//                   <th className="px-3 md:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-r-xl">Ações</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 <tr className="hover:bg-blue-50 transition-colors">
//                   <td className="px-3 md:px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium">16/06/2023</div>
//                     <div className="text-xs text-gray-500">09:00 - 09:30</div>
//                   </td>
//                   <td className="px-3 md:px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src="https://randomuser.me/api/portraits/women/22.jpg"
//                         alt=""
//                       />
//                       <div className="ml-3">
//                         <div className="font-medium">Ana Rodrigues</div>
//                         <div className="text-xs text-gray-500">Diabetes Tipo 1</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-3 md:px-6 py-4 whitespace-nowrap">
//                     <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                       Acompanhamento
//                     </div>
//                   </td>
//                   <td className="px-3 md:px-6 py-4 whitespace-nowrap">
//                     <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                       Confirmada
//                     </div>
//                   </td>
//                   <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="flex space-x-2">
//                       <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
//                         <span className="material-symbols-outlined text-blue-600">edit</span>
//                       </button>
//                       <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
//                         <span className="material-symbols-outlined text-blue-600">cancel</span>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr className="hover:bg-blue-50 transition-colors">
//                   <td className="px-3 md:px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium">16/06/2023</div>
//                     <div className="text-xs text-gray-500">11:00 - 11:30</div>
//                   </td>
//                   <td className="px-3 md:px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src="https://randomuser.me/api/portraits/men/76.jpg"
//                         alt=""
//                       />
//                       <div className="ml-3">
//                         <div className="font-medium">Roberto Santos</div>
//                         <div className="text-xs text-gray-500">Hipertensão</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-3 md:px-6 py-4 whitespace-nowrap">
//                     <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
//                       Primeira Consulta
//                     </div>
//                   </td>
//                   <td className="px-3 md:px-6 py-4 whitespace-nowrap">
//                     <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
//                       Aguardando
//                     </div>
//                   </td>
//                   <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="flex space-x-2">
//                       <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
//                         <span className="material-symbols-outlined text-blue-600">edit</span>
//                       </button>
//                       <button className="p-1 rounded-full hover:bg-blue-100 transition-colors">
//                         <span className="material-symbols-outlined text-blue-600">cancel</span>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

