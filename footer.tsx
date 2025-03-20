import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">IVA</h3>
            <p className="text-sm text-muted-foreground">
              Next-generation AI-powered conversational assistant
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/documentation">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Documentation
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} IVA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
