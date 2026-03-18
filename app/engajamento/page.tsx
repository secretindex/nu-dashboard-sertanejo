"use client"

import Indicator from "@/components/metrics/Indicator"
import { Input, Separator, Button, Chip, Accordion, AccordionItem } from "@heroui/react"
import { MapPin, Building, Users, User, Plus } from "lucide-react"
import { useEffect, useState } from "react"

const EngajamentoPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("Todos")
  const [expandedStates, setExpandedStates] = useState<string[]>([])
  const [statesWithCities, setStatesWithCities] = useState<{[key: string]: string[]}>({})

  useEffect(() => {
    console.log(selectedFilter)
  }, [selectedFilter])

  const toggleState = (stateId: string) => {
    setExpandedStates(prev => 
      prev.includes(stateId) 
        ? prev.filter(id => id !== stateId)
        : [...prev, stateId]
    )
  }

  const addCity = (stateId: string) => {
    // Aqui você pode adicionar a lógica para abrir um modal ou input
    console.log(`Adicionar cidade ao estado: ${stateId}`)
  }

  const filters = ["Todos", "Adultos", "Adolescentes", "Crianças"]

  const statesData = [
    {
      id: "sp",
      name: "São Paulo",
      cities: ["São Paulo", "Campinas", "Guarulhos", "Santos"]
    },
    {
      id: "rn",
      name: "Rio Grande do Norte", 
      cities: ["Natal", "Mossoró", "Parnamirim"]
    },
    {
      id: "mg",
      name: "Minas Gerais",
      cities: ["Belo Horizonte", "Uberlândia", "Contagem"]
    },
    {
      id: "rj",
      name: "Rio de Janeiro",
      cities: ["Rio de Janeiro", "Niterói", "Petrópolis"]
    }
  ]

  return (
    <div className="flex flex-col gap-1 py-8 px-12 w-full">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-bold text-focus">Engajamento</h1>
      </div>
      <span className="text-sm text-muted">
        Gerenciamento de Grupos
      </span>
      <Separator />
      <div className="flex flex-col gap-4 pt-4 w-full">
        <div>
          <h3 className="text-lg font-bold">Indicadores de Participação</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <Indicator
              title="Estados"
              value="0"
              icon={<MapPin size={28} className="text-sm text-focus" />}
            />
            <Indicator
              title="Cidades"
              value="0"
              icon={<Building size={28} className="text-sm text-focus" />}
            />
            <Indicator
              title="Grupos"
              value="0"
              icon={<Users size={28} className="text-sm text-focus" />}
            />
            <Indicator
              title="Pessoas"
              value="0"
              icon={<User size={28} className="text-sm text-focus" />}
            />
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex items-center">
            <Input placeholder="Pesquisar por nome, líder ou cidade..." className="w-full max-w-md py-3" />
          </div>
          <div className="flex gap-2 mt-4">
            <Button className="w-1/8 flex items-center gap-2"><Plus size={16} /> Estado</Button>
            <Button className="w-1/8 flex items-center gap-2"><Plus size={16} /> Cidade</Button>
            <Button className="w-1/8 flex items-center gap-2"><Plus size={16} /> Grupo</Button>
          </div>
          <div className="mt-4">
            <h4 className="text-md font-semibold">Filtrar por tipo</h4>
            <div className="flex gap-2 mt-2">
              {filters.map((filter) => (
                <Chip
                  key={filter}
                  variant={selectedFilter === filter ? "primary" : "soft"}
                  color={selectedFilter === filter ? "accent" : "default"}
                  className="cursor-pointer"
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </Chip>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-md font-semibold">Estados e Grupos</h4>
            <div className="mt-2 space-y-2">
              {statesData.map((state) => (
                <div key={state.id} className="border rounded-lg">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => toggleState(state.id)}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{state.name}</span>
                      <span className="ml-auto">
                        {expandedStates.includes(state.id) ? '▼' : '▶'}
                      </span>
                    </div>
                  </Button>
                  {expandedStates.includes(state.id) && (
                    <div className="p-4 border-t">
                      <div className="flex flex-col gap-2">
                        {state.cities.map((city: string, index: number) => (
                          <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <Building size={16} />
                            <span>{city}</span>
                          </div>
                        ))}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-2 w-full"
                          onClick={() => addCity(state.id)}
                        >
                          <Plus size={14} />
                          Adicionar Cidade
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EngajamentoPage