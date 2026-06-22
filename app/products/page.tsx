import {
  Laptop,
  Network,
  Shield,
  Phone,
  Server,
  Briefcase,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "PC & Laptop Solutions",
    description:
      "Business and personal computing solutions from trusted technology brands.",
    icon: Laptop,
  },
  {
    title: "Networking Infrastructure",
    description:
      "Routers, switches, access points, structured cabling and enterprise networking.",
    icon: Network,
  },
  {
    title: "CCTV Surveillance",
    description:
      "Advanced security and monitoring solutions for offices, shops and homes.",
    icon: Shield,
  },
  {
    title: "EPBX Communication Systems",
    description:
      "Reliable communication infrastructure for modern organizations.",
    icon: Phone,
  },
  {
    title: "Enterprise Hardware",
    description:
      "Servers, storage solutions, peripherals and enterprise-grade equipment.",
    icon: Server,
  },
  {
    title: "IT Consulting",
    description:
      "Strategic technology guidance to help businesses scale efficiently.",
    icon: Briefcase,
  },
];

const partners = [
  "Dell",
  "HP",
  "Lenovo",
  "Cisco",
  "TP-Link",
  "D-Link",
  "Hikvision",
  "CP Plus",
];

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 font-medium mb-4">
            Solutions & Products
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Technology Solutions for Modern Businesses
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Explore our range of IT infrastructure, networking,
            surveillance, communication and consulting solutions.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Card
                  key={solution.title}
                  className="transition-all hover:-translate-y-1 hover:shadow-xl hover:border-blue-200"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {solution.title}
                    </h3>

                    <p className="text-muted-foreground">
                      {solution.description}
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

      {/* Partners */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-600 font-medium mb-3">
            Trusted Technology Partners
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Working With Industry Leaders
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="rounded-xl border bg-white p-6 font-medium"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Need Help Choosing the Right Solution?
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Our experts can help you select the best technology
            infrastructure for your business requirements.
          </p>

          <div className="mt-10">
            <Button size="lg">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}