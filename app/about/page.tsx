export default function AboutPage() {
  return (
    <main>
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 font-medium mb-4">
            About Vinayaka Infotech
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Technology Solutions Since 1995
          </h1>

          <p className="mt-6 text-muted-foreground text-lg">
            For over three decades, Vinayaka Infotech has helped businesses
            and individuals build reliable technology infrastructure through
            quality products, expert consulting, and trusted support.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-muted-foreground leading-8">
            Established in 1995, Vinayaka Infotech has grown into a trusted
            provider of IT infrastructure solutions. From PC and laptop sales
            to networking, CCTV, EPBX systems, and enterprise hardware, we
            help organizations adopt technology with confidence.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border p-6">
              PC & Laptop Solutions
            </div>

            <div className="rounded-xl border p-6">
              Networking Infrastructure
            </div>

            <div className="rounded-xl border p-6">
              CCTV & Surveillance
            </div>

            <div className="rounded-xl border p-6">
              EPBX Systems
            </div>

            <div className="rounded-xl border p-6">
              Enterprise Hardware
            </div>

            <div className="rounded-xl border p-6">
              IT Consulting
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}