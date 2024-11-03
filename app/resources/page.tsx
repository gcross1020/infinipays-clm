"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  FileSpreadsheet,
  FileCheck,
  PenTool,
  Calculator,
  BarChart,
  Brain,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const resources = [
  {
    title: "AI Proposal Generator",
    description: "Generate professional proposals with AI assistance",
    icon: Brain,
    href: "/resources/proposal",
    aiPowered: true,
  },
  {
    title: "Smart Invoice Creator",
    description: "Create and manage invoices with automated calculations",
    icon: FileSpreadsheet,
    href: "/resources/invoice",
    aiPowered: true,
  },
  {
    title: "Estimate Builder",
    description: "Build detailed estimates with AI-powered cost analysis",
    icon: Calculator,
    href: "/resources/estimate",
    aiPowered: true,
  },
  {
    title: "Contract Templates",
    description: "Access industry-specific contract templates",
    icon: FileText,
    href: "/resources/templates",
    aiPowered: true,
  },
  {
    title: "Project Scope Analyzer",
    description: "AI-powered tool to analyze and define project scope",
    icon: BarChart,
    href: "/resources/scope-analyzer",
    aiPowered: true,
  },
  {
    title: "Document Editor",
    description: "Collaborative document editing with version control",
    icon: PenTool,
    href: "/resources/editor",
    aiPowered: false,
  },
  {
    title: "Compliance Checker",
    description: "Verify document compliance with AI assistance",
    icon: FileCheck,
    href: "/resources/compliance",
    aiPowered: true,
  },
];

export default function ResourcesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Resources</h1>
          <p className="text-muted-foreground">
            AI-powered tools and templates for your business
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.title} className="relative overflow-hidden">
            {resource.aiPowered && (
              <div className="absolute top-2 right-2">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
            )}
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <resource.icon className="h-5 w-5" />
                {resource.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {resource.description}
              </p>
              <Button asChild className="w-full">
                <Link href={resource.href}>Launch Tool</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}