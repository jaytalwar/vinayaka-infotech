import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl border p-12 text-center">
        <p className="text-blue-600 font-medium mb-4">
          Let&apos;s Work Together
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Upgrade Your IT Infrastructure?
        </h2>

        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Whether you need networking, CCTV, hardware procurement,
          enterprise systems, or IT consulting, our team is ready to help.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg">
            Request Consultation
          </Button>

          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}