import { motion } from "framer-motion";
import { Brain, MessageCircle, Globe, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Conversational AI",
    description: "Natural language processing for human-like interactions"
  },
  {
    icon: MessageCircle,
    title: "Real-Time Learning",
    description: "Continuously improves through conversations"
  },
  {
    icon: Heart,
    title: "Emotion-Driven Interactions",
    description: "Adapts responses based on emotional context"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Communicate in multiple languages including Hinglish"
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardHeader>
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
