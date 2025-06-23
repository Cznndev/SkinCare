"use client"

import { Badge } from "@/components/ui/badge"
import { Flame, Package, Info, MessageSquare, BookOpen, Phone, Scissors } from "lucide-react"

interface NavigationTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
  productCount: number
}

export function NavigationTabs({ activeTab, onTabChange, productCount }: NavigationTabsProps) {
  const tabs = [
    {
      id: "ofertas",
      label: "Ofertas",
      icon: Flame,
      badge: "HOT",
      color: "text-red-500",
    },
    {
      id: "produtos",
      label: "Produtos",
      icon: Package,
      badge: productCount.toString(),
      color: "text-nam-teal",
    },
    {
      id: "servicos",
      label: "Serviços",
      icon: Scissors,
      badge: "12",
      color: "text-nam-blue",
    },
    {
      id: "sobre",
      label: "Sobre",
      icon: Info,
      color: "text-nam-gray-medium",
    },
    {
      id: "depoimentos",
      label: "Depoimentos",
      icon: MessageSquare,
      color: "text-nam-navy",
    },
    {
      id: "blog",
      label: "Blog",
      icon: BookOpen,
      color: "text-nam-gray-dark",
    },
    {
      id: "contato",
      label: "Contato",
      icon: Phone,
      color: "text-nam-teal",
    },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-nam-gray-light sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center overflow-x-auto py-4">
          <div className="flex space-x-1 min-w-max">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`nav-item flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-nam-teal text-white shadow-lg"
                      : "text-nam-gray-dark hover:bg-nam-teal/10 hover:text-nam-teal"
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? "text-white" : tab.color}`} />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <Badge
                      className={`ml-1 ${
                        isActive
                          ? "bg-white text-nam-teal"
                          : tab.id === "ofertas"
                            ? "bg-red-500 text-white animate-pulse"
                            : "bg-nam-teal text-white"
                      }`}
                    >
                      {tab.badge}
                    </Badge>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
