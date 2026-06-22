export default function Hero() {
  return (
<section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <div className="absolute inset-0 -z-10">
  <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
</div>
        <p className="text-sm font-medium text-blue-600 mb-4">
          Trusted Since 1995
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight">
          Complete IT Infrastructure Solutions
          <br />
          for Modern Businesses.
        </h1>

        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          Vinayaka Infotech provides end-to-end IT solutions including PCs,
          laptops, networking infrastructure, CCTV systems, EPBX solutions,
          hardware components, and enterprise consulting services.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium">
            Explore Services
          </button>

          <button className="px-6 py-3 rounded-xl border font-medium">
            Contact Us
          </button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <span>30+ Years Experience</span>
          <span>B2B & B2C Solutions</span>
          <span>Networking • CCTV • EPBX</span>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
  {[
    "Networking",
    "CCTV",
    "EPBX",
    "Laptops",
    "Servers",
    "IT Consulting",
  ].map((item) => (
    <span
      key={item}
      className="px-4 py-2 rounded-full border text-sm"
    >
      {item}
    </span>
  ))}
</div>
      </div>
    </section>
  );
}