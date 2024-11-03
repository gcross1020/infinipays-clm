"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Bot, Send, User } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: "I'm processing your request..." },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold">AI Assistant</h1>
        <p className="text-muted-foreground">
          Get help with contracts, workflows, and more
        </p>
      </div>

      <Card className="flex-1 flex flex-col p-4">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.role === "assistant" ? "" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    message.role === "assistant"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <Bot className="h-4 w-4" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-4 max-w-[80%] ${
                    message.role === "assistant"
                      ? "bg-muted"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex gap-2 mt-4">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}