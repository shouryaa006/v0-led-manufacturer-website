export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Illuminate Your Space with Premium LED Solutions
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Energy-efficient, durable, and innovative LED lighting for residential, commercial, and industrial
            applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Explore Products
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex-1 relative h-80 md:h-96">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="w-64 h-64 bg-accent/30 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 bg-accent/50 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-accent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
