import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User } from "lucide-react";

export function ChatInterface() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{type: 'user' | 'bot', content: string}>>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "Thanks for your message! This is a demo of how IVA would respond in a real conversation."
      }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <Card className="max-w-2xl mx-auto p-4">
                <div className="h-80 overflow-y-auto mb-4">
                  {messages.map((message, i) => (
                    <div key={i} className={`flex gap-2 mb-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {message.type === 'bot' && <Bot className="w-6 h-6" />}
                      <div className={`rounded-lg p-3 max-w-[80%] ${
                        message.type === 'user' ? 'bg-primary text-white' : 'bg-gray-100'
                      }`}>
                        {message.content}
                      </div>
                      {message.type === 'user' && <User className="w-6 h-6" />}
                    </div>
                  ))}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-1 p-2"
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </motion.div>
                  )}
                </div>
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isLoading}>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <Button size="lg" onClick={() => setIsOpen(true)}>
                Try IVA Demo
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
