import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Meet IVA, Your Intelligent Virtual Assistant
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the next generation of AI-powered conversations with emotional intelligence and multilingual support.
          </p>
          <Button size="lg" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            Let's Talk with IVA
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
