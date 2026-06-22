const features = [
  {
    title: "Established in 1995",
    description:
      "Over three decades of experience delivering reliable IT solutions.",
  },
  {
    title: "End-to-End Solutions",
    description:
      "From hardware procurement to complete infrastructure deployment.",
  },
  {
    title: "B2B & B2C Expertise",
    description:
      "Serving businesses, institutions and individual customers alike.",
  },
  {
    title: "Trusted Technology Partner",
    description:
      "Long-term customer relationships built on reliability and support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-3">
            Why Vinayaka Infotech
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technology Solutions Backed by Experience
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border bg-white p-8"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}