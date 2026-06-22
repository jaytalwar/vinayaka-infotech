import { Card, CardContent } from "@/components/ui/card";
import {
  Laptop,
  Network,
  Shield,
  Phone,
  Server,
  Briefcase,
} from "lucide-react";

const services = [
  {
    title: "PC & Laptop Sales",
    description:
      "Business and personal computing solutions from trusted brands.",
    icon: Laptop,
  },
  {
    title: "Networking Infrastructure",
    description:
      "Complete network setup including routers, switches and cabling.",
    icon: Network,
  },
  {
    title: "CCTV Installation",
    description:
      "Advanced surveillance systems for offices, shops and homes.",
    icon: Shield,
  },
  {
    title: "EPBX Systems",
    description:
      "Reliable communication systems for modern organizations.",
    icon: Phone,
  },
  {
    title: "Hardware Components",
    description:
      "Servers, storage, peripherals and enterprise-grade hardware.",
    icon: Server,
  },
  {
    title: "IT Consulting",
    description:
      "Strategic technology guidance tailored to your business needs.",
    icon: Briefcase,
  },
];
export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-3">
            Our Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Complete IT Solutions
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end technology solutions for businesses,
            institutions and individuals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
  const Icon = service.icon;

  return (
    <Card
      key={service.title}
      className="transition-all hover:-translate-y-1 hover:shadow-xl hover:border-blue-200"
    >
      <CardContent className="p-6">

        <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3">
          <Icon className="h-6 w-6 text-blue-700" />
        </div>

        <h3 className="text-xl font-semibold mb-3">
          {service.title}
        </h3>

        <p className="text-muted-foreground">
          {service.description}
        </p>

        <button className="mt-6 text-blue-600 font-medium">
          Learn More →
        </button>

      </CardContent>
    </Card>
  );
})}
        </div>
      </div>
    </section>
  );
}