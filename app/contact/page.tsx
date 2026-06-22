import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main>
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 font-medium mb-4">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Let&aposs Discuss Your IT Requirements
          </h1>

          <p className="mt-6 text-muted-foreground text-lg">
            Tell us about your business needs and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto rounded-3xl border p-8">
          <div className="space-y-6">
            <Input placeholder="Your Name" />

            <Input type="email" placeholder="Email Address" />

            <Input placeholder="Phone Number" />

            <Textarea
              placeholder="Describe your requirement..."
              className="min-h-[150px]"
            />

            <Button className="w-full">
              Submit Inquiry
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}