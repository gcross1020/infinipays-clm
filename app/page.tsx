import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Users, CreditCard, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Contract Management",
      description: "AI-powered contract drafting and lifecycle management",
      icon: FileText,
      href: "/contracts",
    },
    {
      title: "Client Relationships",
      description: "Comprehensive CRM with integrated communication tools",
      icon: Users,
      href: "/clients",
    },
    {
      title: "Secure Payments",
      description: "Integrated payment processing with InfiniPays PayCenter",
      icon: CreditCard,
      href: "/payments",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Welcome to InfiniPaysCLM
        </h1>
        <p className="text-lg text-muted-foreground">
          The comprehensive AI-powered platform for contract lifecycle management
          and client relationships
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6">
            <feature.icon className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-muted-foreground mb-4">{feature.description}</p>
            <Button asChild>
              <Link href={feature.href} className="inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}