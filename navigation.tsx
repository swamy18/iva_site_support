import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-2xl text-primary">IVA</a>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features">
            <a className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          </Link>
          <Link href="#privacy">
            <a className="text-sm font-medium hover:text-primary transition-colors">Privacy</a>
          </Link>
          <Link href="#faq">
            <a className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </Link>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
