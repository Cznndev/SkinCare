"use client"

import { useState, useEffect } from "react"
import { WelcomeAnimation } from "@/components/welcome-animation"
import { CartDrawer } from "@/components/cart-drawer"
import { LoginModal } from "@/components/auth/login-modal"
import { RegisterModal } from "@/components/auth/register-modal"
import { UserProfile } from "@/components/auth/user-profile"
import { NavigationTabs } from "@/components/navigation-tabs"
import { ProdutosTab } from "@/components/tabs/produtos-tab"
import { SobreTab } from "@/components/tabs/sobre-tab"
import { DepoimentosTab } from "@/components/tabs/depoimentos-tab"
import { BlogTab } from "@/components/tabs/blog-tab"
import { ContatoTab } from "@/components/tabs/contato-tab"
import { OfertasTab } from "@/components/tabs/ofertas-tab"
import { ServicosTab } from "@/components/tabs/servicos-tab"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Truck, Award, User, Flame, Scissors } from "lucide-react"
import { products } from "@/data/products"

export default function HomePage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("ofertas")
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  const renderTabContent = () => {
    switch (activeTab) {
      case "ofertas":
        return <OfertasTab />
      case "produtos":
        return <ProdutosTab />
      case "servicos":
        return <ServicosTab />
      case "sobre":
        return <SobreTab />
      case "depoimentos":
        return <DepoimentosTab />
      case "blog":
        return <BlogTab />
      case "contato":
        return <ContatoTab />
      default:
        return <OfertasTab />
    }
  }

  return (
    <div className="min-h-screen bg-nam-light transition-colors duration-300">
      {/* Welcome Animation */}
      {showWelcome && <WelcomeAnimation />}

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-nam-gray-light transition-all-smooth">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-slide-in-left">
              <img
                src="/images/nam-logo.png"
                alt="NAM - New Age Men"
                className="h-12 w-auto hover-scale transition-transform-smooth filter drop-shadow-lg"
              />
            </div>

            <div className="flex items-center space-x-4 animate-slide-in-right">
              {user ? (
                <Button
                  variant="ghost"
                  onClick={() => setShowProfile(true)}
                  className="flex items-center gap-2 text-nam-gray-dark hover:text-nam-teal button-bounce interactive-element"
                >
                  <User className="w-5 h-5 icon-bounce" />
                  <span className="hidden sm:inline">Olá, {user.firstName}</span>
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  onClick={() => setShowLogin(true)}
                  className="text-nam-gray-dark hover:text-nam-teal button-bounce interactive-element"
                >
                  Entrar
                </Button>
              )}
              <CartDrawer />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nam-navy via-nam-blue to-nam-teal text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-slide-in-left">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-red-600 text-white animate-pulse badge-pulse">
                    <Flame className="w-3 h-3 mr-1 icon-bounce" />
                    OFERTAS ESPECIAIS
                  </Badge>
                  <Badge className="bg-nam-teal text-white animate-slide-in-right">
                    <Scissors className="w-3 h-3 mr-1" />
                    Serviços Estéticos
                  </Badge>
                </div>
                <h2 className="text-5xl font-bold mb-6 leading-tight animate-slide-in-bottom">
                  Estética Masculina de
                  <span className="text-nam-teal animate-gradient"> Nova Geração</span>
                </h2>
                <p
                  className="text-xl text-nam-gray-light mb-8 leading-relaxed animate-slide-in-bottom"
                  style={{ animationDelay: "0.2s" }}
                >
                  Produtos e serviços desenvolvidos especificamente para o homem moderno. Tecnologia avançada,
                  resultados comprovados e cuidado personalizado.
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4 animate-slide-in-bottom"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-lg px-8 animate-glow button-bounce interactive-element"
                    onClick={() => setActiveTab("ofertas")}
                  >
                    <Flame className="w-5 h-5 mr-2 icon-bounce" />
                    Ver Ofertas
                  </Button>
                  <Button
                    size="lg"
                    className="bg-nam-teal hover:bg-nam-blue text-lg px-8 button-bounce interactive-element"
                    onClick={() => setActiveTab("servicos")}
                  >
                    <Scissors className="w-5 h-5 mr-2 icon-bounce" />
                    Nossos Serviços
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-nam-gray-light text-nam-gray-light hover:bg-nam-teal hover:border-nam-teal text-lg px-8 button-bounce interactive-element"
                    onClick={() => setActiveTab("produtos")}
                  >
                    Ver Produtos
                  </Button>
                </div>
                <div
                  className="flex items-center gap-8 mt-8 animate-slide-in-bottom"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-nam-teal icon-bounce" />
                    <span className="text-sm">100% Natural</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-nam-teal icon-bounce" />
                    <span className="text-sm">Dermatologicamente Testado</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&crop=center&q=80"
                alt="Produtos e Serviços NAM"
                className="rounded-2xl shadow-2xl hover-scale transition-transform-smooth animate-float"
              />
              <div
                className="absolute -bottom-6 -left-6 bg-white text-nam-navy p-4 rounded-xl shadow-lg animate-scale-in hover-lift"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-nam-teal fill-current star-fill" />
                  <span className="font-bold">4.9/5</span>
                </div>
                <p className="text-sm text-nam-gray-medium">+2.500 clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} productCount={products.length} />

      {/* Tab Content */}
      <main>{renderTabContent()}</main>

      {/* Footer */}
      <footer className="bg-nam-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/nam-logo.png"
                  alt="NAM - New Age Men"
                  className="h-8 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-nam-gray-light mb-4">
                Estética e cuidados masculinos de nova geração para o homem moderno.
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-nam-teal fill-current" />
                ))}
                <span className="text-sm text-nam-gray-light ml-2">4.9/5 (2.500+ avaliações)</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-nam-gray-light">
                <li>
                  <button
                    onClick={() => setActiveTab("ofertas")}
                    className="hover:text-nam-teal transition-colors flex items-center gap-2"
                  >
                    <Flame className="w-4 h-4 text-red-500" />
                    Ofertas Especiais
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("servicos")}
                    className="hover:text-nam-teal transition-colors flex items-center gap-2"
                  >
                    <Scissors className="w-4 h-4 text-nam-teal" />
                    Serviços Estéticos
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("produtos")} className="hover:text-nam-teal transition-colors">
                    Produtos
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("sobre")} className="hover:text-nam-teal transition-colors">
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("contato")} className="hover:text-nam-teal transition-colors">
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-nam-gray-light">
                <li>
                  <a href="#" className="hover:text-nam-teal">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-nam-teal">
                    Política de Troca
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-nam-teal">
                    Frete e Entrega
                  </a>
                </li>
                <li>
                  <button onClick={() => setActiveTab("contato")} className="hover:text-nam-teal transition-colors">
                    Fale Conosco
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-nam-gray-light">
                <p>📧 contato@newagemen.com.br</p>
                <p>📱 (11) 99999-9999</p>
                <p>📍 São Paulo, SP</p>
                <div className="flex items-center gap-8 mt-4">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span className="text-xs">Frete Grátis R$ 150+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs">Compra Segura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-nam-gray-dark mt-8 pt-8 text-center text-nam-gray-light">
            <p>&copy; 2024 New Age Men (NAM). Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToRegister={() => {
          setShowLogin(false)
          setShowRegister(true)
        }}
      />

      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToLogin={() => {
          setShowRegister(false)
          setShowLogin(true)
        }}
      />

      <UserProfile isOpen={showProfile} onClose={() => setShowProfile(false)} />
    </div>
  )
}
