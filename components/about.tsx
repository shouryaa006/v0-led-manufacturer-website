export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96">
            <img
              src="/modern-led-manufacturing-facility.jpg"
              alt="About LumiTech"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About LumiTech</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              With over 15 years of experience in LED lighting innovation, LumiTech has been at the forefront of
              sustainable lighting solutions. We combine cutting-edge technology with environmental responsibility.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Our mission is to provide high-quality, energy-efficient lighting that reduces carbon footprint while
              enhancing spaces for millions of people worldwide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-accent mb-2">50K+</p>
                <p className="text-foreground/70">Installations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-2">15+</p>
                <p className="text-foreground/70">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-2">98%</p>
                <p className="text-foreground/70">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
