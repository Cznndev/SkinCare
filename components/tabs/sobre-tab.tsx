"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Truck, Users, Heart, Leaf, CheckCircle, Calendar, MapPin } from "lucide-react"

export function SobreTab() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Fórmulas Exclusivas",
      description: "Desenvolvidas especificamente para as características da pele masculina",
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: "Ingredientes Premium",
      description: "Selecionamos apenas os melhores ingredientes naturais e ativos",
    },
    {
      icon: <Truck className="w-6 h-6 text-purple-600" />,
      title: "Entrega Rápida",
      description: "Receba seus produtos em casa com frete grátis acima de R$ 150",
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: "100% Natural",
      description: "Produtos livres de parabenos, sulfatos e ingredientes agressivos",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Dermatologicamente Testado",
      description: "Todos os produtos são testados e aprovados por dermatologistas",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-600" />,
      title: "Cruelty Free",
      description: "Nunca testamos em animais, respeitamos toda forma de vida",
    },
  ]

  const timeline = [
    {
      year: "2020",
      title: "Identificação da Oportunidade",
      description: "Reconhecemos a lacuna no mercado de skincare masculino especializado",
    },
    {
      year: "2021",
      title: "Desenvolvimento da Abordagem",
      description: "Criamos uma comunicação direta e acolhedora para o público masculino",
    },
    {
      year: "2022",
      title: "Lançamento da Marca",
      description: "New Age Men nasce com foco em quebrar barreiras culturais",
    },
    {
      year: "2023",
      title: "Expansão e Reconhecimento",
      description: "Consolidamos nossa posição como referência em skincare masculino",
    },
    {
      year: "2024",
      title: "Nova Era Estabelecida",
      description: "Redefinimos o autocuidado masculino como parte do bem-estar integral",
    },
  ]

  const stats = [
    { number: "2.500+", label: "Clientes Satisfeitos" },
    { number: "19", label: "Produtos Únicos" },
    { number: "4.9", label: "Avaliação Média" },
    { number: "98%", label: "Recompra" },
  ]

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-slate-100 text-slate-900">Nossa História</Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            A <span className="text-blue-600">New Age Men</span> nasceu de uma necessidade real
          </h2>
          <div className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed space-y-6">
            <p>
              A New Age Men surgiu como resposta direta a um cenário claro, porém pouco explorado:
              <strong className="text-slate-800">
                {" "}
                a ausência de uma abordagem especializada, acolhedora e inteligente para o autocuidado masculino.
              </strong>
            </p>
            <p>
              Por muito tempo, o cuidado com a pele foi tratado como algo exclusivamente feminino — tanto pela indústria
              quanto pela comunicação tradicional de marcas. Homens que buscavam produtos de skincare enfrentavam duas
              barreiras principais:
              <strong className="text-slate-800">
                falta de informação direcionada e ausência de ambientes preparados para recebê-los de forma natural e
                respeitosa.
              </strong>
            </p>
            <p>
              Ao analisar esse cenário, nasceu a proposta da New Age Men:
              <strong className="text-blue-600">
                reposicionar o skincare masculino como parte integrante do bem-estar, da saúde e da autoestima do homem
                moderno.
              </strong>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="py-8">
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Uma nova era do cuidado masculino</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Criamos mais que produtos — desenvolvemos uma experiência completa que respeita a individualidade
              masculina. Nossa abordagem combina ciência, praticidade e comunicação direta, sem estereótipos ou
              barreiras culturais.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-slate-700">Comunicação direta e sem estereótipos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-slate-700">Ambiente acolhedor e respeitoso</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-slate-700">Informação especializada e direcionada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-slate-700">Skincare como parte do bem-estar integral</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=500&fit=crop&crop=center&q=80"
              alt="Homem moderno cuidando da pele"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-slate-900">Pioneiros</span>
              </div>
              <p className="text-sm text-slate-600">Skincare masculino especializado</p>
            </div>
          </div>
        </div>

        {/* Company Logo Section */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
            <img src="/images/nam-logo.png" alt="NAM - New Age Men Logo" className="h-24 w-auto mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">New Age Men</h3>
            <p className="text-slate-600 leading-relaxed">
              Mais que uma marca, somos um movimento que acredita que o cuidado pessoal masculino deve ser simples,
              eficaz e adequado às necessidades específicas da pele do homem moderno.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">O que nos torna únicos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Nossa Jornada</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 hidden md:block"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <Badge variant="outline" className="font-semibold">
                            {item.year}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <CardContent className="p-8 text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-4">Onde Estamos</h3>
            <p className="text-slate-300 mb-4">
              Sediados em São Paulo, atendemos todo o Brasil com entrega rápida e segura
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                <span>Entrega Nacional</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Compra Segura</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
