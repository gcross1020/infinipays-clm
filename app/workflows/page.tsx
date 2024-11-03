"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus } from "lucide-react";

const workflowTemplates = [
  {
    title: "Contract Approval",
    description: "Route contracts through multiple approvers",
    steps: ["Draft Review", "Legal Review", "Final Approval", "Signature Request"],
  },
  {
    title: "Client Onboarding",
    description: "Streamline new client setup process",
    steps: ["Info Collection", "Document Setup", "Welcome Email", "Initial Meeting"],
  },
  {
    title: "Payment Collection",
    description: "Automated payment reminder workflow",
    steps: ["Invoice Creation", "Payment Reminder", "Late Notice", "Collection"],
  },
];

export default function WorkflowsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Workflow Builder</h1>
          <p className="text-muted-foreground">
            Create and manage automated workflows
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Workflow
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>Blank Workflow</DropdownMenuItem>
            <DropdownMenuItem>From Template</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflowTemplates.map((template) => (
          <Card key={template.title} className="p-6">
            <h3 className="font-semibold text-lg mb-2">{template.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {template.description}
            </p>
            <div className="space-y-2">
              {template.steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {index + 1}
                  </div>
                  {step}
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              Use Template
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}