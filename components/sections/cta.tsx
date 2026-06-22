import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur">
        <p className="text-blue-600 font-medium mb-4">
          Let&apos;s Work Together
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Upgrade Your IT Infrastructure?
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Whether you need networking, CCTV, hardware procurement,
          enterprise systems, or IT consulting, our team is ready to help.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg">
            Request Consultation
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black"
            >
            Contact Us
        </Button>
        </div>
      </div>
    </section>
  );
}