"use client"

import { useState } from "react"

const products = [
  {
    id: 1,
    name: "LED Panel Lights",
    category: "Indoor",
    image: "/modern-led-panel-light-fixture.jpg",
    description: "Ultra-thin, energy-efficient panel lights for offices and homes",
  },
  {
    id: 2,
    name: "Smart Bulbs",
    category: "Smart Home",
    image: "/smart-led-bulb-with-app-control.jpg",
    description: "WiFi-enabled RGB bulbs with app control and voice integration",
  },
  {
    id: 3,
    name: "Street Lights",
    category: "Outdoor",
    image: "/professional-led-street-light.jpg",
    description: "High-brightness outdoor lighting for streets and parking areas",
  },
  {
    id: 4,
    name: "Track Lights",
    category: "Commercial",
    image: "/adjustable-led-track-light.jpg",
    description: "Adjustable track lighting for retail and gallery spaces",
  },
  {
    id: 5,
    name: "Downlights",
    category: "Indoor",
    image: "/recessed-led-downlight-ceiling.jpg",
    description: "Recessed downlights with adjustable color temperature",
  },
  {
    id: 6,
    name: "Industrial Lights",
    category: "Industrial",
    image: "/industrial-led-high-bay-light.jpg",
    description: "Heavy-duty lighting for warehouses and factories",
  },
]

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(products.map((p) => p.category))]
  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Product Range</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover our comprehensive collection of LED lighting solutions designed for every application
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-accent font-semibold mb-2">{product.category}</p>
                <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                <p className="text-foreground/70 mb-4">{product.description}</p>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
