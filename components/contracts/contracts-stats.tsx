"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, FileWarning, FileClock, FileText } from "lucide-react";

const stats = [
  {
    title: "Active Contracts",
    value: "123",
    icon: FileCheck,
    description: "Currently active contracts",
  },
  {
    title: "Pending Review",
    value: "12",
    icon: FileWarning,
    description: "Contracts awaiting review",
  },
  {
    title: "Expiring Soon",
    value: "5",
    icon: FileClock,
    description: "Contracts expiring in 30 days",
  },
  {
    title: "Total Contracts",
    value: "256",
    icon: FileText,
    description: "Total contracts in system",
  },
];

export function ContractsStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}