"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const stages = [
  {
    name: "Lead",
    deals: [
      { title: "Tech Solutions Deal", value: "$50,000", company: "Tech Corp" },
      { title: "Software License", value: "$25,000", company: "Digital Inc" },
    ],
  },
  {
    name: "Meeting Scheduled",
    deals: [
      { title: "Consulting Project", value: "$75,000", company: "Consult Co" },
    ],
  },
  {
    name: "Proposal Sent",
    deals: [
      { title: "Enterprise Contract", value: "$100,000", company: "Big Corp" },
      { title: "Service Agreement", value: "$45,000", company: "Service Ltd" },
    ],
  },
  {
    name: "Negotiation",
    deals: [
      { title: "Annual Contract", value: "$150,000", company: "Major Inc" },
    ],
  },
  {
    name: "Closed Won",
    deals: [
      { title: "Support Contract", value: "$80,000", company: "Support Co" },
    ],
  },
];

export default function PipelinePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Sales Pipeline</h1>
          <p className="text-muted-foreground">
            Track and manage your sales opportunities
          </p>
        </div>
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Deals</SelectItem>
              <SelectItem value="high">High Value</SelectItem>
              <SelectItem value="new">New This Week</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 h-[calc(100vh-12rem)] overflow-hidden">
        {stages.map((stage) => (
          <div key={stage.name} className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{stage.name}</h3>
              <span className="text-muted-foreground text-sm">
                {stage.deals.length}
              </span>
            </div>
            <div className="flex-1 space-y-4 overflow-auto">
              {stage.deals.map((deal) => (
                <Card
                  key={deal.title}
                  className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium mb-1">{deal.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {deal.company}
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {deal.value}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}