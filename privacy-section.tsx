import { motion } from "framer-motion";
import { Shield, Lock, UserCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const privacyFeatures = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "Your conversations are fully encrypted and secure"
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "GDPR compliant data handling and storage"
  },
  {
    icon: UserCheck,
    title: "User Control",
    description: "Full control over your data and privacy settings"
  }
];

export function PrivacySection() {
  return (
    <section id="privacy" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Privacy Matters</h2>
          <p className="text-muted-foreground">
            We prioritize your data security and privacy at every step
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {privacyFeatures.map((feature, index) => (
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
