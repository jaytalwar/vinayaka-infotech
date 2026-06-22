import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-bold tracking-tight">
            VINAYAKA INFOTECH
          </span>
          <span className="text-xs text-muted-foreground">
            Since 1995
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <Button>
          Get Quote
        </Button>
      </div>
    </header>
  );
}