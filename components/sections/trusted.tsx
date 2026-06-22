const stats = [
  {
    value: "30+",
    label: "Years Experience",
  },
  {
    value: "1995",
    label: "Established",
  },
  {
    value: "B2B + B2C",
    label: "Solutions",
  },
  {
    value: "End-to-End",
    label: "IT Services",
  },
];

export default function Trusted() {
  return (
    <section className="py-16 px-6 border-y">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl font-bold">
                {stat.value}
              </h3>

              <p className="text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}